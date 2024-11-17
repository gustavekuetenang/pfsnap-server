import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from "typeorm";

import { CountryEntity } from "../../country/entities/country.entity";
import { DefaultSoftDeleteEntity } from "../../utils/entities/default.soft-delete.entity";
import { InvoiceEntity } from "../../invoice/entities/invoice.entity";
import { ProductEntity } from "../../product/entities/product.entity";
import { UserEntity } from "../../users/infrastructure/persistence/relational/entities/user.entity";

@Entity('company')
export class CompanyEntity extends DefaultSoftDeleteEntity {
    @Column('varchar', { nullable: false })
    name: string;

    @Column('varchar', { nullable: true })
    description: string;

    @Column('varchar', { nullable: true })
    address: string;

    @Column('varchar', { nullable: true })
    email: string;

    @Column('varchar', { nullable: true, name: 'phone_number' })
    phoneNumber: string;

    @Column('varchar', { nullable: true, name: 'address_line_1' })
    addressLine1: string;

    @Column('varchar', { nullable: true, name: 'address_line_2' })
    addressLine2: string;

    @Column('varchar', { nullable: true })
    city: string;

    @Column('varchar', { nullable: true })
    website: string;

    @Column('varchar', { nullable: true })
    logo: string;

    @Column('varchar', { nullable: true, name: 'postal_code' })
    postalCode: string;

    @Column('varchar', { nullable: true, name: 'additional_info' })
    additionalInfo: string;

    @Column('varchar', { nullable: true, name: 'tax_registration_number' })
    taxRegistrationNumber: string;

    @OneToMany(() => InvoiceEntity, (invoice) => invoice.company, { eager: false })
    invoices?: InvoiceEntity[];

    @ManyToOne(() => CountryEntity, (country) => country.clients, { eager: true })
    @JoinColumn({ name: 'country_id', })
    country: CountryEntity;

    @ManyToOne(() => ProductEntity, (product) => product.company, { eager: false })
    products?: ProductEntity[];

    @ManyToOne(() => UserEntity, (user) => user.companies, { eager: true })
    @JoinColumn({ name: 'owner_id' })
    owner: UserEntity;
}
