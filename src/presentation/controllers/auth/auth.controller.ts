import { IAuthBody } from '@application/dto/auth-body.request';
import { Controller, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiTags } from '@nestjs/swagger';
import { HttpAuthService } from '@services/http-auth.service';

@Controller('api/auth')
export class AuthController {
  constructor(private readonly authService: HttpAuthService) {}

  @ApiTags('Login')
  @Post('login')
  async auth() {
    const body: IAuthBody = {
      client_id: process.env.CLIENT_ID,
      client_secret: process.env.CLIENT_SECRET,
      grant_type: process.env.GRANT_TYPE,
      username: process.env.EMAIL_PERSONAL,
    };
    return await this.authService.httpAuth(body);
  }
}
