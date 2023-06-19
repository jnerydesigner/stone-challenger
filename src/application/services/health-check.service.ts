import { Injectable } from '@nestjs/common';

@Injectable()
export class HealthCheckService {
  getHealthCheck() {
    return {
      message: 'ok',
    };
  }
}
