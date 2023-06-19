import { Injectable, Logger } from '@nestjs/common';
import { Redis } from 'ioredis';

@Injectable()
export class RedisRepository {
  private readonly redis: Redis;
  private readonly logger: Logger;
  constructor() {
    this.redis = new Redis({
      host: '172.18.0.1',
      port: 6379,
    });
    this.logger = new Logger(RedisRepository.name);
  }

  async saveDataKeyValue(key: string, value: string): Promise<void> {
    try {
      await this.redis.set(key, value);
    } catch (error) {
      this.logger.error(error);
    }
  }

  async getValueUsingKey(key: string): Promise<string | null> {
    try {
      const value = await this.redis.get(key);
      return value;
    } catch (error) {
      this.logger.error(error);
      return null;
    }
  }

  async updateValueUsingKey(key: string, newValue: string): Promise<boolean> {
    try {
      const result = await this.redis.set(key, newValue);
      return result === 'OK';
    } catch (error) {
      this.logger.error('Error when updating data :', error);
      return false;
    }
  }

  async closeConnection(): Promise<void> {
    await this.redis.quit();
  }
}
