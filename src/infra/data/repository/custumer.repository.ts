import { IClientResponse } from '@application/dto/client.response';
import { CustumersRepositoryImplements } from '@data/implements/custumers-repository.implements';
import { Client, IClient } from '@domain/entitys/client.entity';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CustumerRepository implements CustumersRepositoryImplements {
  findAllClients(): Promise<IClientResponse[]> {
    throw new Error('Method not implemented.');
  }
  private custumers: IClient[] = [];
  async save(client: IClient): Promise<IClient | any> {
    this.custumers.push(client);

    return this.custumers;
  }
  async update(idClient: string, client: Client): Promise<IClient> {
    this.custumers.forEach((custumer) => {
      if (custumer.id === idClient) {
        custumer.document = client.document;
        custumer.name = client.name;
      }
    });

    return this.custumers.find((custumer) => custumer.id === idClient);
  }
  async findClient(idClient: string): Promise<IClient> {
    return this.custumers.find((custumer) => custumer.id === idClient);
  }
}
