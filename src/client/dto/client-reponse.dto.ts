import { ApiProperty } from '@nestjs/swagger';
import { CountryResponseDto } from '../../country/dto/country-reponse.dto';

export class ClientResponseDto {
    @ApiProperty({ example: 'Company Name' })
    companyName: string;

    @ApiProperty({ example: 'John' })
    firstName: string;

    @ApiProperty({ example: 'Doe' })
    lastName: string;

    @ApiProperty({ example: 'john.doe@example.com' })
    email: string;

    @ApiProperty({ example: '1234567890' })
    phoneNumber: string;

    @ApiProperty({ example: 'Address Line 1' })
    addressLine1: string;

    @ApiProperty({ example: 'Address Line 2' })
    addressLine2: string;

    @ApiProperty({ example: 'City' })
    city: string;

    @ApiProperty({ example: 'www.example.com' })
    website: string;

    @ApiProperty({ example: 'logo.png' })
    logo: string;

    @ApiProperty({ example: '12345' })
    postalCode: string;

    @ApiProperty({ example: 'Additional Information' })
    additionalInfo: string;

    @ApiProperty({ type: CountryResponseDto })
    country: CountryResponseDto;

    @ApiProperty({ example: 'TRN12345' })
    taxRegistrationNumber: string;
}
