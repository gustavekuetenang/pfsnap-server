import { IsNotEmpty, IsString, Length } from 'class-validator';

import { ApiProperty } from '@nestjs/swagger';

export class CreateCountryDto {
  @ApiProperty({ example: 'United States', description: 'The name of the country in English' })
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty({ example: 'États-Unis', description: 'The name of the country in French' })
  @IsNotEmpty()
  @IsString()
  frName: string;

  @ApiProperty({ example: '+1', description: 'The international calling code for the country' })
  @IsNotEmpty()
  @IsString()
  callingCode: string;

  @ApiProperty({ example: 'US', description: 'The ISO 3166-1 alpha-2 code for the country' })
  @IsNotEmpty()
  @IsString()
  @Length(2, 2)
  alpha2Code: string;

  @ApiProperty({ example: 'USA', description: 'The ISO 3166-1 alpha-3 code for the country' })
  @IsNotEmpty()
  @IsString()
  @Length(3, 3)
  alpha3Code: string;
}
