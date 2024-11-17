import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from "typeorm";

import { CountryEntity } from "../../country/entities/country.entity";
import { DefaultSoftDeleteEntity } from "../../utils/entities/default.soft-delete.entity";
import { InvoiceEntity } from "../../invoice/entities/invoice.entity";

@Entity({
    name: 'client'
})
export class ClientEntity extends DefaultSoftDeleteEntity {
    @Column('varchar', { nullable: true, name: 'company_name' })
    companyName: string;

    @Column('varchar', { nullable: true, name: 'first_name' })
    firstName: string;

    @Column('varchar', { nullable: false, name: 'last_name' })
    lastName: string;

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

    @OneToMany(() => InvoiceEntity, (invoice) => invoice.client, { eager: false })
    invoices?: InvoiceEntity[];

    @ManyToOne(() => CountryEntity, (country) => country.clients, { eager: true })
    @JoinColumn({ name: 'country_id', })
    country: CountryEntity;

    @Column('varchar', { nullable: true, name: 'tax_registration_number' })
    taxRegistrationNumber: string;
}
