import { AXIOS_INSTANCE_TOKEN } from '@application/services/constants';
import { Module } from '@nestjs/common';
import axios from 'axios';

@Module({
  providers: [
    {
      provide: AXIOS_INSTANCE_TOKEN,
      useValue: axios,
    },
  ],
  exports: [AXIOS_INSTANCE_TOKEN],
})
export class AxiosModule {}
