import { IClientResponse } from '@application/dto/client.response';
import { Injectable, Logger } from '@nestjs/common';
import { Redis } from 'ioredis';

@Injectable()
export class RedisRepository {
  private readonly redis: Redis;
  private readonly logger: Logger;
  constructor() {
    this.redis = new Redis({
      host: 'redis',
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
      return await this.redis.get(key);
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

  async findAllClients(): Promise<IClientResponse[]> {
    try {
      const keys = await this.redis.keys('*');
      const data: any[] = [];

      for (const key of keys) {
        const value = await this.redis.get(key);
        data.push({
          key,
          client: JSON.parse(value),
        });
      }
      return data;
    } catch (error) {
      this.logger.error('Error displaying customer data:', error);
      return null;
    }
  }

  async closeConnection(): Promise<void> {
    await this.redis.quit();
  }
}
