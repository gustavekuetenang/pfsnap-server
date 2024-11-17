import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CountryResponseDto } from '../country/dto/country-reponse.dto';
import { CountryEntity } from '../country/entities/country.entity';
import { CreateCompanyDto } from './dto/create-company.dto';
import { UpdateCompanyDto } from './dto/update-company.dto';
import { CompanyEntity } from './entities/company.entity';

@Injectable()
export class CompanyService {
  constructor(
    @InjectRepository(CompanyEntity)
    public readonly repository: Repository<CompanyEntity>
  ) {
  }

  async create(createCompanyDto: CreateCompanyDto) {
    return await this.repository.save(createCompanyDto);
    // return this.toResponseDto(company);
  }

  findAll() {
    return this.repository.find();
  }

  findAllWithSoftDeleted() {
    return this.repository.find({ withDeleted: true })
  }
  
  async findOne(id: string) {
    const find = await this.repository.findOneBy({ id });
    if (!find) {
      throw new NotFoundException();
    }
    return find;
  }


  async update(id: string, updateCompanyDto: UpdateCompanyDto) {
    const find = await this.findOne(id);
    Object.assign(find, { ...updateCompanyDto });
    return this.repository.save(find);
  }

  softDelete(id: string) {
    return this.repository.softDelete(id);
  }

  restore(id: string) {
    return this.repository.restore(id);
  }

  async remove(id: string) {
    return this.repository.delete(id);
  }

  private toResponseDto(country: CountryEntity): CountryResponseDto {
    return {
      id: country.id,
      name: country.name,
      frName: country.frName,
      callingCode: country.callingCode,
      alpha2Code: country.alpha2Code,
      alpha3Code: country.alpha3Code,
    };
  }
}
