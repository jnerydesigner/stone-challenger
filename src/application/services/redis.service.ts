import { RedisConnectionException } from '@application/exception/redis-connection.exception';
import { Injectable } from '@nestjs/common';
import { Redis } from 'ioredis';

@Injectable()
export class RedisService {
  private redisClient: Redis;

  constructor() {
    try {
      this.redisClient = new Redis();
    } catch (error) {
      throw new RedisConnectionException('cache indisponível');
    }
  }
}
