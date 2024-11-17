import { IsDecimal, IsOptional, IsString } from 'class-validator';

import { ApiProperty } from '@nestjs/swagger';
import { CompanyEntity } from '../../company/entities/company.entity';

export class CreateProductDto {
    @ApiProperty({ example: 'Product Name' })
    @IsString()
    name: string;
  
    @ApiProperty({ example: 100.0 })
    @IsDecimal()
    price: number;
  
    @ApiProperty({ example: 'Product description' })
    @IsString()
    description: string;
  
    @ApiProperty()
    company: CompanyEntity;
}
