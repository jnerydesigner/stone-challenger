import { ClientRequestDto } from '@application/dto/client-request.dto';
import { IClientRequest } from '@application/dto/client.request';
import { StoneErrorException } from '@application/exception/stone-error.exception';
import { CustumerService } from '@application/services/custumer.service';
import { Client } from '@domain/entitys/client.entity';
import {
  Body,
  Controller,
  Get,
  HttpStatus,
  Param,
  Post,
  Put,
} from '@nestjs/common';

import { ApiTags } from '@nestjs/swagger';

@Controller('api/custumers')
export class CustumerController {
  constructor(private readonly custumerService: CustumerService) {}

  @ApiTags('Find All Clients')
  @Get('findall')
  findAll() {
    return this.custumerService.findAll();
  }

  @ApiTags('Create Client')
  @Post()
  saveClient(@Body() client: ClientRequestDto) {
    const { document, name } = client;
    if (!document || !name) {
      throw new StoneErrorException('request inválida', HttpStatus.BAD_REQUEST);
    }
    return this.custumerService.saveCustumer(client);
  }

  @ApiTags('Get Client')
  @Get(':id')
  findClient(@Param('id') idClient: string) {
    return this.custumerService.findClient(idClient);
  }

  @ApiTags('Update Client')
  @Put(':id')
  updateClient(@Param('id') idClient: string, @Body() client: Client) {
    return this.custumerService.updateCustumer(idClient, client);
  }
}
