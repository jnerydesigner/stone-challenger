import { AuthService } from '@services/auth.service';
import { HttpStatus, Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport';
import { IAuthBody } from '@application/dto/auth-body.request';
import { NextFunction } from 'express';
import { StoneErrorException } from '@application/exception/stone-error.exception';

@Injectable()
export class SsoStrategy extends PassportStrategy(Strategy, 'sso') {
  constructor(private readonly authService: AuthService) {
    super();
  }

  async authenticate(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<any> {
    const body: IAuthBody = {
      client_id: process.env.CLIENT_ID,
      client_secret: process.env.CLIENT_SECRET,
      grant_type: process.env.GRANT_TYPE,
      username: process.env.EMAIL_PERSONAL,
    };
    const authResponse = await this.authService.auth(body);

    if (!authResponse) {
      // Se a autenticação falhar, envie uma resposta de erro
      throw new StoneErrorException('não autorizado', HttpStatus.UNAUTHORIZED);
    }

    console.log(authResponse);

    next(authResponse);
  }

  async validate(): Promise<any> {
    console.log('entrou');
    return null;
  }
}
