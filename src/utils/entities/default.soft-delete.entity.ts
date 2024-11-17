import { DefaultEntity } from './default.entity';
import {
  DeleteDateColumn
} from 'typeorm';

export class DefaultSoftDeleteEntity extends DefaultEntity{
  @DeleteDateColumn({
    name: 'deleted_at',
  })
  deletedAt: Date | null;
}
