import { IsNotEmpty, IsString } from 'class-validator';

export class CreateRedisDto {
  @IsString()
  @IsNotEmpty()
  key: string;

  @IsString()
  @IsNotEmpty()
  value: string;
}
