import { Injectable, Logger } from '@nestjs/common';
import qs from 'qs';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';
import { AuthDtoResponse } from '@application/dto/auth.dto';
import { IAuthBody } from '@application/dto/auth-body.request';
import * as jwt from 'jsonwebtoken';

@Injectable()
export class HttpAuthService {
  private readonly logger: Logger;
  constructor(private readonly httpService: HttpService) {
    this.logger = new Logger(HttpAuthService.name);
  }
  async httpAuth(body: IAuthBody): Promise<AuthDtoResponse> {
    const headers = {
      'Content-Type': 'application/x-www-form-urlencoded',
    };
    const base64Credentials = Buffer.from(`${body.username}`).toString(
      'base64',
    );

    const requestBody = qs.stringify({
      grant_type: body.grant_type,
      client_id: body.client_id,
      client_secret: body.client_secret,
      username: body.username,
      password: base64Credentials,
    });

    const url = `${process.env.URL_AUTH}/${process.env.ENDPOINT_AUTH}`;

    const response = await firstValueFrom(
      this.httpService.post(url, requestBody, {
        headers: {
          ...headers,
        },
      }),
    )
      .then((response) => {
        return {
          success: true,
          ...response.data,
        };
      })
      .catch((erro) => this.logger.error(erro));

    this.logger.log(response.access_token);

    return response;
  }
}
