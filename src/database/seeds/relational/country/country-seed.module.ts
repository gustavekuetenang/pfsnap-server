import { CountryEntity } from '../../../../country/entities/country.entity';
import { CountrySeedService } from './country-seed.service';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([CountryEntity])],
  providers: [CountrySeedService],
  exports: [CountrySeedService],
})
export class CountrySeedModule { }
