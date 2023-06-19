import { IAuthBody } from '@application/dto/auth-body.request';
import { Injectable } from '@nestjs/common';
import { HttpAuthService } from '@services/http-auth.service';

@Injectable()
export class AuthService {
  constructor(private readonly httpAuthService: HttpAuthService) {}
  auth(body: IAuthBody) {
    return this.httpAuthService.httpAuth(body);
  }
}
