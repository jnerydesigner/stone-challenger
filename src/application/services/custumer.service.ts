import { CustumersRepositoryImplements } from '@data/implements/custumers-repository.implements';
import { CustumerMapper } from '@data/mappers/custumer.mapper';
import { Client, IClient } from '@domain/entitys/client.entity';
import { Injectable } from '@nestjs/common';
import { v4 as uuid } from 'uuid';

@Injectable()
export class CustumerService {
  constructor(
    private readonly custumerRepository: CustumersRepositoryImplements,
  ) {}

  saveCustumer(client: IClient): Promise<IClient[] | null> {
    const clientBody = {
      id: uuid(),
      ...client,
    };

    // const clientMapper = CustumerMapper.toDomain({
    //   id: clientBody.id,
    //   document: clientBody.document,
    //   name: clientBody.name,
    // });

    return this.custumerRepository.save(clientBody);

    // return null;
  }

  findClient(idClient: string) {
    return this.custumerRepository.findClient(idClient);
  }

  updateCustumer(idClient: string, client: Client) {
    return this.custumerRepository.update(idClient, client);
  }
}
