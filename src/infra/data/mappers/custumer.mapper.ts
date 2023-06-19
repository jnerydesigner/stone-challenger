import { Client } from '@domain/entitys/client.entity';

export class CustumerMapper {
  static toDomain(client: IClient): Client {
    return new Client({
      id: client.id,
      document: client.document,
      name: client.name,
    });
  }
  static toData(client: Client): IClient {
    return {
      id: client.id,
      document: client.document,
      name: client.name,
    };
  }
}

interface IClient {
  id: string | null;
  document: number;
  name: string;
}
