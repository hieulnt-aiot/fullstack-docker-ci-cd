import { Injectable } from '@nestjs/common';
import Redis from 'ioredis';
import { RedisResponseDto } from './dto/redis-response.dto';

@Injectable()
export class RedisService {
  private client: Redis;

  constructor() {
    this.client = new Redis({
      host: process.env.REDIS_HOST,
      port: Number(process.env.REDIS_PORT),
    });
  }

  async findAll(): Promise<RedisResponseDto[]> {
    const keys = await this.client.keys('*');

    const result: RedisResponseDto[] = await Promise.all(
      keys.map(async key => {
        const value = await this.client.get(key);
        return { key, value };
      })
    );

    return result;
  }

  async get(key: string): Promise<string | null> {
    return await this.client.get(key);
  }

  async set(key: string, value: string): Promise<'OK'> {
    return await this.client.set(key, value);
  }

  async update(key: string, value: string): Promise<'OK'> {
    const exists = await this.client.exists(key);
    if (!exists) throw new Error(`Key "${key}" does not exist`);
    return await this.client.set(key, value);
  }

  async delete(key: string): Promise<number> {
    return await this.client.del(key);
  }
}
