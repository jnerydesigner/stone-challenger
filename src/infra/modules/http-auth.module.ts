import { HttpAuthService } from '@application/services/http-auth.service';
import { HttpModule, HttpService } from '@nestjs/axios';
import { Global, Module } from '@nestjs/common';
import { AxiosModule } from './axios.module';

@Global()
@Module({
  imports: [AxiosModule],
  providers: [HttpAuthService, HttpService],
  exports: [HttpAuthService],
})
export class HttpAuthModule {}
