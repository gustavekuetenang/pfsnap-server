import { ApiProperty } from '@nestjs/swagger';
import { InvoiceResponseDto } from '../../invoice/dto/invoice-reponse.dto';
import { ProductResponseDto } from '../../product/dto/product-response.dto';

export class InvoiceItemResponseDto {
    @ApiProperty({ example: 'Product Description' })
    description: string;

    @ApiProperty({ example: 2 })
    quantity: number;

    @ApiProperty({ example: 50.0 })
    unitPrice: number;

    @ApiProperty({ type: ProductResponseDto })
    product: ProductResponseDto;

    @ApiProperty({ type: InvoiceResponseDto })
    invoice: InvoiceResponseDto;
}
