import { InvoiceItemController } from './invoice-item.controller';
import { InvoiceItemEntity } from './entities/invoice-item.entity';
import { InvoiceItemService } from './invoice-item.service';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([InvoiceItemEntity])],
  controllers: [InvoiceItemController],
  providers: [InvoiceItemService],
})
export class InvoiceItemModule { }
