import { HttpException, HttpStatus } from '@nestjs/common';

export class StoneErrorException extends HttpException {
  constructor(message: string, statusCode: HttpStatus) {
    super(message, statusCode);
  }
}
