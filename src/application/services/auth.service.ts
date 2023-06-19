import { Injectable } from '@nestjs/common';
import { HttpAuthService } from '@services/http-auth.service';

@Injectable()
export class AuthService {
  constructor(private readonly httpAuthService: HttpAuthService) {}
  auth() {
    return this.httpAuthService.httpAuth();
  }
}
