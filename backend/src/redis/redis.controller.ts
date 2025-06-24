import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { RedisService } from './redis.service';
import { CreateRedisDto } from './dto/create-redis.dto';

@Controller('api/redis')
export class RedisController {
  constructor(private readonly redisService: RedisService) {}

  @Get()
  async findAll() {
    return this.redisService.findAll();
  }

  @Get(':key')
  async get(@Param('key') key: string) {
    const value = await this.redisService.get(key);
    if (value === null) throw new NotFoundException(`Key "${key}" not found`);
    return { key, value };
  }

  @Post()
  async create(@Body() dto: CreateRedisDto) {
    await this.redisService.set(dto.key, dto.value);
    return { message: 'Key added', key: dto.key, value: dto.value };
  }

  @Put(':key')
  async update(@Param('key') key: string, @Body('value') value: string) {
    await this.redisService.update(key, value);
    return { message: 'Key updated', key, value };
  }

  @Delete(':key')
  async delete(@Param('key') key: string) {
    const deleted = await this.redisService.delete(key);
    if (deleted === 0) throw new NotFoundException(`Key "${key}" not found`);
    return { message: 'Key deleted', key };
  }
}
