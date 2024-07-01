import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type InvoiceDocument = Invoice & Document;

@Schema()
export class Invoice {
  @Prop({ required: true })
  customerEmail: string;

  @Prop({ required: true })
  amount: number;

  @Prop({ required: true })
  description: string;

  @Prop({ default: Date.now })
  createdAt: Date;
}

export const InvoiceSchema = SchemaFactory.createForClass(Invoice);