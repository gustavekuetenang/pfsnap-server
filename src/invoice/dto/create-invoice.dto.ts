import { IsDateString, IsOptional, IsString, IsUUID } from 'class-validator';

import { ApiProperty } from '@nestjs/swagger';
import { ClientEntity } from '../../client/entities/client.entity';
import { CompanyEntity } from '../../company/entities/company.entity';

export class CreateInvoiceDto {
  @ApiProperty({ example: 'INV-12345' })
  @IsOptional()
  @IsString()
  number: string;

  @ApiProperty({ example: '2024-11-17T00:00:00Z' })
  @IsOptional()
  @IsDateString()
  issueDate: Date;

  @ApiProperty({ example: '2024-12-17T00:00:00Z' })
  @IsOptional()
  @IsDateString()
  dueDate: Date;

  @ApiProperty({ example: 'The terms and conditions of the invoice' })
  @IsOptional()
  @IsString()
  terms: string;

  @ApiProperty()
  @IsUUID()
  client: ClientEntity;

  @ApiProperty()
  @IsUUID()
  company: CompanyEntity;
}