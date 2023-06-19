export interface IClient {
  id: string | null;
  document: number;
  name: string;
}

export class Client {
  private props: IClient;
  constructor(client: IClient) {
    this.props = client;
  }

  public set id(id: string) {
    this.props.id = id;
  }
  public get id() {
    return this.props.id;
  }

  public set document(document: number) {
    this.props.document = document;
  }
  public get document() {
    return this.props.document;
  }

  public set name(name: string) {
    this.props.name = name;
  }
  public get name() {
    return this.props.name;
  }
}
