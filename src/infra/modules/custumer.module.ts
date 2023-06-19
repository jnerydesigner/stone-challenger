import { CustumerService } from '@services/custumer.service';
import { CustumerController } from '@controllers/custumer/custumer.controller';
import { MiddlewareConsumer, Module } from '@nestjs/common';
import { DataModule } from './data.module';

import { AuthService } from '@services/auth.service';

import { SsoStrategy } from '@infra/auth/sso.strategy';
import { AuthenticationMiddleware } from '@infra/auth/authentication.middleware';

@Module({
  imports: [DataModule],
  controllers: [CustumerController],
  providers: [CustumerService, AuthService, SsoStrategy],
})
export class CustumerModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AuthenticationMiddleware).forRoutes('*');
  }
}
