import { ApiProperty } from '@nestjs/swagger';
import { ClientResponseDto } from '../../client/dto/client-reponse.dto';
import { CompanyResponseDto } from '../../company/dto/company-response.dto';
import { InvoiceItemResponseDto } from '../../invoice-item/dto/invoice-response.dto';

export class InvoiceResponseDto {
  @ApiProperty({ example: 'INV-12345' })
  number: string;

  @ApiProperty({ example: '2024-11-17T00:00:00Z' })
  issueDate: Date;

  @ApiProperty({ example: '2024-12-17T00:00:00Z' })
  dueDate: Date;

  @ApiProperty({ example: 'The terms and conditions of the invoice' })
  terms: string;

  @ApiProperty({ type: [InvoiceItemResponseDto], example: [{ description: 'item1', quantity: 2 }] })
  items: InvoiceItemResponseDto[];

  @ApiProperty({ type: ClientResponseDto })
  client: ClientResponseDto;

  @ApiProperty({ type: CompanyResponseDto })
  company: CompanyResponseDto;
}
