import { CreateClientDto } from './dto/create-client.dto';
import { Injectable, NotFoundException } from '@nestjs/common';
import { UpdateClientDto } from './dto/update-client.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { ClientEntity } from './entities/client.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ClientService {
  constructor(
    @InjectRepository(ClientEntity)
    private readonly repository: Repository<ClientEntity>
  ){
    
  }
  create(createClientDto: CreateClientDto) {
    return this.repository.save(createClientDto);
  }

  findAll() {
    return this.repository.find({withDeleted: false});
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


  async update(id: string, updateClientDto: UpdateClientDto) {
    const find = await this.findOne(id);
    Object.assign(find, { ...updateClientDto });
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
}
