export interface IClient {
  id: string | null;
  document: number;
  name: string;
}

export class Client {
  constructor(client: IClient) {
    this.id = client.id;
    this.document = client.document;
    this.name = client.name;
  }

  public set id(id: string) {
    this.id = id;
  }
  public get id() {
    return this.id;
  }

  public set document(document: number) {
    this.document = document;
  }
  public get document() {
    return this.document;
  }

  public set name(name: string) {
    this.name = name;
  }
  public get name() {
    return this.name;
  }
}
