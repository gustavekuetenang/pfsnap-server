import { InvoiceController } from './invoice.controller';
import { InvoiceEntity } from './entities/invoice.entity';
import { InvoiceService } from './invoice.service';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([InvoiceEntity])],
  controllers: [InvoiceController],
  providers: [InvoiceService],
})
export class InvoiceModule { }
