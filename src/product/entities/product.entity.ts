import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from "typeorm";

import { CompanyEntity } from "../../company/entities/company.entity";
import { DefaultSoftDeleteEntity } from "../../utils/entities/default.soft-delete.entity";
import { InvoiceItemEntity } from "../../invoice-item/entities/invoice-item.entity";

@Entity({
    name: 'product'
})
export class ProductEntity extends DefaultSoftDeleteEntity {
    @Column('varchar', { nullable: true })
    name: string;

    @Column('decimal', { nullable: true })
    price: number;

    @Column('text', { nullable: true })
    description: string;

    @ManyToOne(() => CompanyEntity, company => company.products, { eager: false })
    @JoinColumn({ name: 'company_id' })
    company: CompanyEntity;

    @OneToMany(() => InvoiceItemEntity, (invoiceItem) => invoiceItem.product, { eager: false })
    items: InvoiceItemEntity[];
}
