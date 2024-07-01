import { Controller, Post, Body } from '@nestjs/common';
import { InvoicesService } from '../services/factura.service';
import { CreateInvoiceDto } from '../dto/facturaDto';

@Controller('invoices')
export class InvoicesController {
  constructor(private readonly invoicesService: InvoicesService) {}

  @Post()
  async createInvoice(@Body() createInvoiceDto: CreateInvoiceDto) {
    return this.invoicesService.createInvoice(createInvoiceDto);
  }
}