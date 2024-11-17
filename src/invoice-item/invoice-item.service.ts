import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateInvoiceItemDto } from './dto/create-invoice-item.dto';
import { UpdateInvoiceItemDto } from './dto/update-invoice-item.dto';
import { InvoiceItemEntity } from './entities/invoice-item.entity';

@Injectable()
export class InvoiceItemService {
  constructor(
    @InjectRepository(InvoiceItemEntity)
    private readonly repository: Repository<InvoiceItemEntity>
  ) {
  }
  
  create(createInvoiceItemDto: CreateInvoiceItemDto) {
    return this.repository.save(createInvoiceItemDto);
  }

  findAll() {
    return this.repository.find({ withDeleted: false });
  }

  async findOne(id: string) {
    const find = await this.repository.findOneBy({ id });
    if (!find) {
      throw new NotFoundException();
    }
    return find;
  }


  async update(id: string, updateInvoiceItemDto: UpdateInvoiceItemDto) {
    const find = await this.findOne(id);
    Object.assign(find, { ...updateInvoiceItemDto });
    return this.repository.save(find);
  }

  async remove(id: string) {
    return this.repository.delete(id);
  }
}
