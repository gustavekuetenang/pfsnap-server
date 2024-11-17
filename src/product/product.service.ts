import { HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ProductEntity } from './entities/product.entity';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(ProductEntity)
    private readonly repository: Repository<ProductEntity>,
  ) {

  }
  create(createProductDto: CreateProductDto) {
    return this.repository.save(createProductDto);
  }

  findAll() {
    return this.repository.find({withDeleted: false});
  }

  async findAllWithSoftDeleted() {
    return this.repository.find({ withDeleted: true });
  }

  async findOne(id: string) {
    const find = await this.repository.findBy({ id });
    if (!find) {
      throw new NotFoundException({
        status: HttpStatus.NOT_FOUND,
        error: 'notFound'
      });
    }
    return find;
  }

  async update(id: string, updateProductDto: UpdateProductDto) {
    const find = await this.findOne(id);
    Object.assign(find, { ...updateProductDto });
    return this.repository.save(find);
  }

  softDelete(id: string) {
    this.repository.softDelete(id);
  }

  restore(id: string) {
    this.repository.restore(id);
  }

  remove (id: string){
    this.repository.delete(id);
  }
}
