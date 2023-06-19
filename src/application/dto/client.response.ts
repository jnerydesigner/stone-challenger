export interface IClientResponse {
  key: string;
  client: {
    id: string;
    document: number;
    name: string;
  };
  success?: boolean;
}
