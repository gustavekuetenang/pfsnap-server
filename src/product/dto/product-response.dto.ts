import { ApiProperty } from '@nestjs/swagger';
import { CompanyResponseDto } from '../../company/dto/company-response.dto';

export class ProductResponseDto {
  @ApiProperty({ example: 'Product Name' })
  name: string;

  @ApiProperty({ example: 100.0 })
  price: number;

  @ApiProperty({ example: 'Product description' })
  description: string;

  @ApiProperty({ type: CompanyResponseDto })
  company: CompanyResponseDto;
}
