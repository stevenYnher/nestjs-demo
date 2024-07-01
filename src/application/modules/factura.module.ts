
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { InvoicesController } from '../controllers/factura.controller';
import { InvoicesService } from '../services/factura.service';
import { Invoice, InvoiceSchema } from '../schemas/factura.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: Invoice.name, schema: InvoiceSchema }])],
  controllers: [InvoicesController],
  providers: [InvoicesService],
})
export class InvoicesModule {}