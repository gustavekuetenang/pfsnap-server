import { Module } from '@nestjs/common';
import { ProductController } from './product.controller';
import { ProductEntity } from './entities/product.entity';
import { ProductService } from './product.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([ProductEntity])],
  controllers: [ProductController],
  providers: [ProductService],
})
export class ProductModule { }
