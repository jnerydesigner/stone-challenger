import { RedisRepository } from '@repositories/redis.repository';
import { CustumersRepositoryImplements } from '@data/implements/custumers-repository.implements';
import { CustumerRedisRepository } from '@data/repository/custumer-redis.repository';
import { Global, Module } from '@nestjs/common';

@Global()
@Module({
  providers: [
    {
      provide: CustumersRepositoryImplements,
      useClass: CustumerRedisRepository,
    },
    RedisRepository,
  ],
  exports: [
    {
      provide: CustumersRepositoryImplements,
      useClass: CustumerRedisRepository,
    },
  ],
})
export class DataModule {}
