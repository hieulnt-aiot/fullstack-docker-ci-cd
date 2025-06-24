import { Controller, Get } from '@nestjs/common';
import { CounterService } from './counter.service';

@Controller('api/counter')
export class CounterController {
  constructor(private readonly counterService: CounterService) {}

  @Get()
  async getCounter(): Promise<number> {
    return this.counterService.getAndUpdateCount();
  }
}
