import { IsNumber, IsString } from 'class-validator';

export class ClientRequestDto {
  @IsString({ message: 'Tipo do Campo só pode ser String' })
  id: string | null;

  @IsNumber()
  document: number;

  @IsString({ message: 'Tipo do Campo só pode ser String' })
  name: string;
}
