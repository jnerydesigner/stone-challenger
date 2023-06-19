import { Injectable, Logger } from '@nestjs/common';
import axios, { AxiosResponse } from 'axios';
import qs from 'qs';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';
import { AuthDtoResponse } from '@application/dto/auth.dto';

@Injectable()
export class HttpAuthService {
  private readonly logger: Logger;
  constructor(private readonly httpService: HttpService) {
    this.logger = new Logger(HttpAuthService.name);
  }
  async httpAuth(): Promise<AuthDtoResponse> {
    const headers = {
      'Content-Type': 'application/x-www-form-urlencoded',
    };
    const base64Credentials = Buffer.from(
      `${process.env.EMAIL_PERSONAL}`,
    ).toString('base64');

    const requestBody = qs.stringify({
      grant_type: 'client_credentials',
      client_id: process.env.CLIENT_ID,
      client_secret: process.env.CLIENT_SECRET,
      username: process.env.EMAIL_PERSONAL,
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
        return response.data;
      })
      .catch((erro) => this.logger.error(erro));

    this.logger.log(response);

    return response;
  }
}

interface PostData {
  grant_type: string;
  client_id: string;
  client_secret: string;
  username: string;
  password: string;
  email: string;
  scope: string;
}
