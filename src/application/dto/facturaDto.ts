import { IsString, IsNumber } from 'class-validator';

export class CreateInvoiceDto {
  @IsString()
  customerEmail: string;

  @IsNumber()
  amount: number;

  @IsString()
  description: string;
}