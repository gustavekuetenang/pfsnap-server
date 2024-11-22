import { IsEmail, IsOptional, IsString, IsUUID } from 'class-validator';

import { ApiProperty } from '@nestjs/swagger';
import { CountryEntity } from '../../country/entities/country.entity';

export class CreateClientDto {
    @ApiProperty({ example: 'Company Name' })
    @IsString()
    companyName: string;

    @ApiProperty({ example: 'John' })
    @IsString()
    firstName: string;

    @ApiProperty({ example: 'Doe' })
    @IsString()
    lastName: string;

    @ApiProperty({ example: 'john.doe@example.com' })
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

    @ApiProperty({ example: 'www.example.com' })
    @IsString()
    website: string;

    @ApiProperty({ example: 'logo.png' })
    @IsString()
    logo: string;

    @ApiProperty({ example: '12345' })
    @IsString()
    postalCode: string;

    @ApiProperty({ example: 'Additional Information' })
    @IsString()
    additionalInfo: string;

    @ApiProperty()
    @IsUUID()
    country: CountryEntity;

    @ApiProperty({ example: 'TRN12345' })
    @IsOptional()
    @IsString()
    taxRegistrationNumber: string;
}
