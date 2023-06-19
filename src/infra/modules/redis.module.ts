import { RedisRepository } from '@repositories/redis.repository';
import { Module } from '@nestjs/common';

@Module({
  providers: [RedisRepository],
})
export class RedisModule {}
