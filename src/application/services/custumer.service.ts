import { StoneErrorException } from '@application/exception/stone-error.exception';
import { CustumersRepositoryImplements } from '@data/implements/custumers-repository.implements';
import { Client, IClient } from '@domain/entitys/client.entity';
import { HttpStatus, Injectable } from '@nestjs/common';
import { v4 as uuid } from 'uuid';

@Injectable()
export class CustumerService {
  constructor(
    private readonly custumerRepository: CustumersRepositoryImplements,
  ) {}

  saveCustumer(client: IClient): Promise<IClient | null> {
    const clientBody = {
      id: uuid(),
      ...client,
    };

    return this.custumerRepository.save(clientBody);
  }

  async findClient(idClient: string) {
    const custumer = await this.custumerRepository.findClient(idClient);
    console.log(custumer);
    if (custumer === null) {
      throw new StoneErrorException(
        'cliente inexistente',
        HttpStatus.NOT_FOUND,
      );
    }
    return this.custumerRepository.findClient(idClient);
  }

  async updateCustumer(idClient: string, client: Client) {
    const custumer = await this.custumerRepository.findClient(idClient);
    console.log(custumer);
    if (custumer === null) {
      throw new StoneErrorException(
        'cliente inexistente',
        HttpStatus.NOT_FOUND,
      );
    }
    return this.custumerRepository.update(idClient, client);
  }

  findAll() {
    return this.custumerRepository.findAllClients();
  }
}
