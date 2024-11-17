import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";
import { InvoiceEntity } from "../../invoice/entities/invoice.entity";
import { ProductEntity } from "../../product/entities/product.entity";
import { DefaultEntity } from "../../utils/entities/default.entity";

@Entity({
    name: 'invoice_item'
})
export class InvoiceItemEntity extends DefaultEntity {
    @Column('text', { nullable: true })
    description: string

    @Column('decimal', { nullable: true })
    quantity: number

    @Column('decimal', { nullable: true, name: 'unit_price' })
    unitPrice: number

    @ManyToOne(() => ProductEntity, (product) => product.items, { eager: true })
    @JoinColumn({ name: 'product_id' })
    product: ProductEntity

    @ManyToOne(() => InvoiceEntity, (invoice) => invoice.items, { eager: false })
    @JoinColumn({ name: 'invoice_id' })
    invoice: InvoiceEntity;
}
