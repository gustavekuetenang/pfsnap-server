import { ApiResponseProperty } from '@nestjs/swagger';

export class CountryResponseDto {
  @ApiResponseProperty({ example: '1' })
  id: string;

  @ApiResponseProperty({ example: 'United States' })
  name: string;

  @ApiResponseProperty({ example: 'États-Unis' })
  frName: string;

  @ApiResponseProperty({ example: '+1' })
  callingCode: string;

  @ApiResponseProperty({ example: 'US' })
  alpha2Code: string;

  @ApiResponseProperty({ example: 'USA' })
  alpha3Code: string;
}
