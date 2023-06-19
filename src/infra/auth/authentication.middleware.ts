import { IAuthBody } from '@application/dto/auth-body.request';
import { StoneErrorException } from '@application/exception/stone-error.exception';
import { AuthService } from '@application/services/auth.service';
import {
  HttpException,
  HttpStatus,
  Injectable,
  NestMiddleware,
} from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import * as jwt from 'jsonwebtoken';

@Injectable()
export class AuthenticationMiddleware implements NestMiddleware {
  constructor(private readonly authService: AuthService) {}
  async use(req: Request, res: Response, next: NextFunction) {
    const body: IAuthBody = {
      client_id: process.env.CLIENT_ID,
      client_secret: process.env.CLIENT_SECRET,
      grant_type: process.env.GRANT_TYPE,
      username: process.env.EMAIL_PERSONAL,
    };

    const response = await this.authService.auth(body);
    if (!response?.access_token || response?.access_token === undefined) {
      throw new StoneErrorException('não autorizado', HttpStatus.UNAUTHORIZED);
    }

    next();
  }
}
