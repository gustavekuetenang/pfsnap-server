import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CountryEntity } from '../../../../country/entities/country.entity';
import countriesData from './countries.json';

@Injectable()
export class CountrySeedService {
  constructor(
    @InjectRepository(CountryEntity)
    private repository: Repository<CountryEntity>,
  ) { }

  async run() {
    const count = await this.repository.count();

    if (count === 0) {
      const countries = this.getCountries();
      await this.repository.save(countries);
    }
  }

  getCountries() {
    try {
      const countries = countriesData.map((country: any) => ({
        name: country.name,
        frName: country.translations?.fr || null,
        callingCode: country.callingCodes?.[0] || null,
        alpha3Code: country.alpha3Code,
        alpha2Code: country.alpha2Code,
      }));

      return countries;
    } catch (error) {
      console.error('Error fetching countries:', error.message);
      throw error;
    }
  }
}
