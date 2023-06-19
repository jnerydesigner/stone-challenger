import { AuthController } from '@controllers/auth/auth.controller';
import { Module } from '@nestjs/common';
import { HttpAuthService } from '@services/http-auth.service';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
  controllers: [AuthController],
  providers: [HttpAuthService],
})
export class AuthModule {}
