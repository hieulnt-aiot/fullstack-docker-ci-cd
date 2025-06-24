import { Module } from '@nestjs/common';
import { CounterModule } from './counter/counter.module';
import { NotesModule } from './notes/notes.module';
import { RedisModule } from './redis/redis.module';

@Module({
  imports: [CounterModule, NotesModule, RedisModule],
})
export class AppModule {}
