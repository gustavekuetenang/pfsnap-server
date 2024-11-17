import { ApiProperty } from '@nestjs/swagger';
import { CountryResponseDto } from '../../country/dto/country-reponse.dto';
import { ProductResponseDto } from '../../product/dto/product-response.dto';
import { User } from '../../users/domain/user';

export class CompanyResponseDto {
    @ApiProperty({ example: 'Company Name' })
    name: string;

    @ApiProperty({ example: 'Company Description' })
    description: string;

    @ApiProperty({ example: '123 Main St' })
    address: string;

    @ApiProperty({ example: 'company@example.com' })
    email: string;

    @ApiProperty({ example: '1234567890' })
    phoneNumber: string;

    @ApiProperty({ example: 'Address Line 1' })
    addressLine1: string;

    @ApiProperty({ example: 'Address Line 2' })
    addressLine2: string;

    @ApiProperty({ example: 'City' })
    city: string;

    @ApiProperty({ example: 'www.company.com' })
    website: string;

    @ApiProperty({ example: 'logo.png' })
    logo: string;

    @ApiProperty({ example: '12345' })
    postalCode: string;

    @ApiProperty({ example: 'Additional Info' })
    additionalInfo: string;

    @ApiProperty({ type: CountryResponseDto })
    country: CountryResponseDto;

    @ApiProperty({ type: [ProductResponseDto] })
    products: ProductResponseDto[];

    @ApiProperty({ type: User })
    owner: User;

    @ApiProperty({ example: 'TRN12345' })
    taxRegistrationNumber: string;
}
