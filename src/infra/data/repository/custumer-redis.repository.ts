import { CustumersRepositoryImplements } from '@data/implements/custumers-repository.implements';
import { IClient, Client } from '@domain/entitys/client.entity';
import { Injectable, Logger } from '@nestjs/common';
import { RedisRepository } from '@repositories/redis.repository';

@Injectable()
export class CustumerRedisRepository implements CustumersRepositoryImplements {
  private readonly logger: Logger;
  constructor(private readonly redisRepository: RedisRepository) {
    this.logger = new Logger(CustumerRedisRepository.name);
  }
  async save(client: IClient): Promise<IClient | null | any> {
    const key = `custumer:${client.id}`;
    this.logger.log(key);
    this.redisRepository.saveDataKeyValue(key, JSON.stringify(client));
    return this.redisRepository.getValueUsingKey(key);
  }
  async update(idClient: string, client: Client): Promise<IClient | any> {
    const key = `custumer:${idClient}`;
    this.logger.log(key);
    this.redisRepository.updateValueUsingKey(key, JSON.stringify(client));

    return this.redisRepository.getValueUsingKey(key);
  }
  async findClient(idClient: string): Promise<IClient | any> {
    const key = `custumer:${idClient}`;
    return this.redisRepository.getValueUsingKey(key);
  }
}
