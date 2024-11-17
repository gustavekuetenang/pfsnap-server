import { HttpStatus, Injectable, NotFoundException, UnprocessableEntityException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateInvoiceDto } from './dto/create-invoice.dto';
import { UpdateInvoiceDto } from './dto/update-invoice.dto';
import { InvoiceEntity } from './entities/invoice.entity';

@Injectable()
export class InvoiceService {
  constructor(
    @InjectRepository(InvoiceEntity)
    private readonly repository: Repository<InvoiceEntity>
  ) { }

  async create(createInvoiceDto: CreateInvoiceDto) {
    const find = await this.findOneByNumber(createInvoiceDto.number);

    if (find) {
      throw new UnprocessableEntityException({
        status: HttpStatus.UNPROCESSABLE_ENTITY,
        errors: {
          number: 'numberAlreadyExists',
        },
      });
    }

    const invoice = await this.repository.save(createInvoiceDto);

    return invoice;
  }

  findAll() {
    return this.repository.find({ withDeleted: false });
  }

  findAllWithSoftDeleted() {
    return this.repository.find({ withDeleted: true })
  }

  async findOne(id: string) {
    const find = await this.repository.find();
    if (!find) {
      if (!find) {
        throw new NotFoundException({
          status: HttpStatus.NOT_FOUND,
          error: 'notFound'
        });
      }
    }
    return find;
  }

  async findOneByNumber(number: string) {
    const find = await this.repository.findBy({ number });
    if (!find) {
      throw new NotFoundException({
        status: HttpStatus.NOT_FOUND,
        error: 'notFound'
      });
    }
    return find;
  }

  async update(id: string, updateInvoiceDto: UpdateInvoiceDto) {
    const find = await this.findOne(id);
    Object.assign(find, { ...updateInvoiceDto });
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
