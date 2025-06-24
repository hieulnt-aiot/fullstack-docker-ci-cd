import { Module } from '@nestjs/common';
import { CounterService } from './counter.service';
import { CounterController } from './counter.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [CounterController],
  providers: [CounterService, PrismaService],
})
export class CounterModule {}
