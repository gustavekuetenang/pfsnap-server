import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from "typeorm";

import { ClientEntity } from "../../client/entities/client.entity";
import { CompanyEntity } from "../../company/entities/company.entity";
import { DefaultSoftDeleteEntity } from "../../utils/entities/default.soft-delete.entity";
import { InvoiceItemEntity } from "../../invoice-item/entities/invoice-item.entity";

@Entity({
    name: 'invoice'
})
export class InvoiceEntity extends DefaultSoftDeleteEntity {
    @Column('varchar', { nullable: true })
    number: string;

    @Column({ nullable: true, name: 'issue_date' })
    issueDate: Date;

    @Column({ nullable: true, name: 'due_date' })
    dueDate: Date;

    @Column('text', { nullable: true })
    terms: string;

    @OneToMany(() => InvoiceItemEntity, (invoiceItem) => invoiceItem.invoice, { eager: true })
    items: InvoiceItemEntity[];

    @ManyToOne(() => ClientEntity, (client) => client.invoices, { eager: true })
    @JoinColumn({ name: 'client_id' })
    client: ClientEntity;

    @ManyToOne(() => CompanyEntity, (company) => company.invoices, { eager: true })
    @JoinColumn({ name: 'company_id' })
    company: CompanyEntity;
}
