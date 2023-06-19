import { CustumerService } from '@application/services/custumer.service';
import { Client, IClient } from '@domain/entitys/client.entity';
import { Body, Controller, Get, Param, Patch, Post, Put } from '@nestjs/common';

@Controller('custumers')
export class CustumerController {
  constructor(private readonly custumerService: CustumerService) {}

  @Post()
  saveClient(@Body() client: Client) {
    return this.custumerService.saveCustumer(client);
  }

  @Get(':id')
  findClient(@Param('id') idClient: string) {
    return this.custumerService.findClient(idClient);
  }

  @Put(':id')
  updateClient(@Param('id') idClient: string, @Body() client: Client) {
    return this.custumerService.updateCustumer(idClient, client);
  }
}
