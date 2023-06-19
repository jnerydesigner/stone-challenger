import { Controller, Post, Req } from '@nestjs/common';
import { Request } from 'express';
import { HttpAuthService } from '@services/http-auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: HttpAuthService) {}
  @Post()
  async auth(@Req() req: Request) {
    return await this.authService.httpAuth();
  }
}
