import { IsDecimal, IsOptional, IsString, IsUUID } from 'class-validator';

import { ApiProperty } from '@nestjs/swagger';
import { InvoiceEntity } from '../../invoice/entities/invoice.entity';
import { ProductEntity } from '../../product/entities/product.entity';

export class CreateInvoiceItemDto {
  @ApiProperty({ example: 'Product Description' })
  @IsString()
  description: string;

  @ApiProperty({ example: 2 })
  @IsDecimal()
  quantity: number;

  @ApiProperty({ example: 50.0 })
  @IsDecimal()
  unitPrice: number;

  @ApiProperty()
  @IsUUID()
  product: ProductEntity;

  @ApiProperty()
  @IsUUID()
  invoice: InvoiceEntity;
}
