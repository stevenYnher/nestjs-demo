import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Invoice } from '../schemas/factura.schema';
import * as nodemailer from 'nodemailer';
import { CreateInvoiceDto } from '../dto/facturaDto';

@Injectable()
export class InvoicesService {
  constructor(@InjectModel(Invoice.name) private invoiceModel: Model<Invoice>) {}

  async createInvoice(invoiceData: CreateInvoiceDto): Promise<Invoice> {
    const createdInvoice = new this.invoiceModel(invoiceData);
    const savedInvoice = await createdInvoice.save();


    this.sendConfirmationEmail(savedInvoice);

    this.generateInvoiceReport(savedInvoice);

    return savedInvoice;
  }

  private async sendConfirmationEmail(invoice: Invoice) {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'correo',
        pass: 'clave',
      },
    });

    const mailOptions = {
      from: 'joshue_10@hotmail.es',
      to: invoice.customerEmail,
      subject: 'Factura Confirmación',
      text: `Tu factura ha sido creada exitosamente.`,
    };

    await transporter.sendMail(mailOptions);
  }

  private generateInvoiceReport(invoice: Invoice) {

  }
}