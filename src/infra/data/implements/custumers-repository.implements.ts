import { Client, IClient } from '@domain/entitys/client.entity';

export abstract class CustumersRepositoryImplements {
  abstract save(client: IClient): Promise<IClient[]>;
  abstract update(idClient: string, client: Client): Promise<IClient>;
  abstract findClient(idClient: string): Promise<IClient>;
}
