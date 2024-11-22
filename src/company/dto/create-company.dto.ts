import { IsEmail, IsOptional, IsString, IsUUID } from 'class-validator';

import { ApiProperty } from '@nestjs/swagger';
import { CountryEntity } from '../../country/entities/country.entity';
import { ProductEntity } from '../../product/entities/product.entity';
import { UserEntity } from '../../users/infrastructure/persistence/relational/entities/user.entity';

export class CreateCompanyDto {
    @ApiProperty({ example: 'Company Name' })
    @IsString()
    name: string;

    @ApiProperty({ example: 'Company Description' })
    @IsString()
    description: string;

    @ApiProperty({ example: '123 Main St' })
    @IsString()
    address: string;

    @ApiProperty({ example: 'company@example.com' })
    @IsEmail()
    email: string;

    @ApiProperty({ example: '1234567890' })
    @IsString()
    phoneNumber: string;

    @ApiProperty({ example: 'Address Line 1' })
    @IsString()
    addressLine1: string;

    @ApiProperty({ example: 'Address Line 2' })
    @IsString()
    addressLine2: string;

    @ApiProperty({ example: 'City' })
    @IsString()
    city: string;

    @ApiProperty({ example: 'www.company.com' })
    @IsString()
    website: string;

    @ApiProperty({ example: 'logo.png' })
    @IsString()
    logo: string;

    @ApiProperty({ example: '12345' })
    @IsString()
    postalCode: string;

    @ApiProperty({ example: 'Additional Info' })
    @IsString()
    additionalInfo: string;

    @ApiProperty()
    @IsUUID()
    country: CountryEntity;

    @ApiProperty()
    products: ProductEntity[];

    @ApiProperty()
    @IsUUID()
    owner: UserEntity;

    @ApiProperty({ example: 'TRN12345' })
    @IsOptional()
    @IsString()
    taxRegistrationNumber: string;
}
