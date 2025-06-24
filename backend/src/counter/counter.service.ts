/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import { Injectable } from '@nestjs/common';
import Redis from 'ioredis';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class CounterService {
  private redis: Redis;

  constructor(private prisma: PrismaService) {
    this.redis = new Redis({
      host: process.env.REDIS_HOST,
      port: Number(process.env.REDIS_PORT),
    });
  }

  async getAndUpdateCount(): Promise<number> {
    const redisKey = 'counter';
    let count = await this.redis.get(redisKey);

    // không có trong redis
    if (count === null) {
      const dbCount = await this.prisma.counter.findFirst();
      count = dbCount ? dbCount.count.toString() : '0';
    }

    const newCount = Number(count) + 1;

    // update vào redis
    await this.redis.set(redisKey, newCount.toString());

    // update vào db
    const existing = await this.prisma.counter.findFirst();
    if (existing) {
      await this.prisma.counter.update({
        where: { id: existing.id },
        data: { count: newCount },
      });
    } else {
      await this.prisma.counter.create({
        data: { count: newCount },
      });
    }

    return newCount;
  }
}
