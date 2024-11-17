import { HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UpdateCountryDto } from './dto/update-country.dto';
import { CountryEntity } from './entities/country.entity';

@Injectable()
export class CountryService {
  constructor(
    @InjectRepository(CountryEntity)
    private readonly repository: Repository<CountryEntity>
  ) { }
  
  findAll() {
    return this.repository.find();
  }

  async findOne(id: string) {
    const find = await this.repository.findBy({ id });
    if (!find) {
      throw new NotFoundException({
        status: HttpStatus.NOT_FOUND,
        error: 'notFound'
      })
    }
    return find;
  }

  async update(id: string, updateCountryDto: UpdateCountryDto) {
    const find = await this.findOne(id);
    Object.assign(find, { ...updateCountryDto })
    return this.repository.save(find);
  }
}
