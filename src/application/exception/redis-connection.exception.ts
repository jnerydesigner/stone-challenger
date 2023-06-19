import { HttpException, HttpStatus } from '@nestjs/common';

export class RedisConnectionException extends HttpException {
  constructor(message: string) {
    super(message, HttpStatus.BAD_GATEWAY);
  }
}
