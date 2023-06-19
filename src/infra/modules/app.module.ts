import { Module } from '@nestjs/common';
import { HealtCheckModule } from '@modules/healt-check.module';
import { CustumerModule } from '@modules/custumer.module';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from '@modules/auth.module';
import { RedisModule } from '@modules/redis.module';
import { HttpAuthModule } from './http-auth.module';
import { APP_FILTER } from '@nestjs/core';
import { RedisConnectionFilter } from '@application/filter/redis-connection.filter';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    HealtCheckModule,
    CustumerModule,
    AuthModule,
    RedisModule,
    HttpAuthModule,
  ],
  controllers: [],
  providers: [
    {
      provide: APP_FILTER,
      useClass: RedisConnectionFilter,
    },
  ],
})
export class AppModule {}
