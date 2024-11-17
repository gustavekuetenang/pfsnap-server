import { CompanyController } from './company.controller';
import { CompanyEntity } from './entities/company.entity';
import { CompanyService } from './company.service';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([CompanyEntity])],
  controllers: [CompanyController],
  providers: [CompanyService],
})
export class CompanyModule { }
