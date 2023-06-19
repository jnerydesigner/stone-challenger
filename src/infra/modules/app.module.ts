import { Module } from '@nestjs/common';
import { HealtCheckModule } from '@modules/healt-check.module';
import { CustumerModule } from '@modules/custumer.module';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from '@modules/auth.module';
import { RedisModule } from '@modules/redis.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    HealtCheckModule,
    CustumerModule,
    AuthModule,
    RedisModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
