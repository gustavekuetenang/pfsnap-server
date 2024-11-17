import { Column, Entity, OneToMany } from "typeorm";

import { ClientEntity } from "../../client/entities/client.entity";
import { CompanyEntity } from "../../company/entities/company.entity";
import { DefaultEntity } from "../../utils/entities/default.entity";

@Entity({
    name: 'country'
})
export class CountryEntity extends DefaultEntity {
    @Column('varchar', { nullable: false })
    name: string;

    @Column('varchar', { nullable: false, name: 'fr_name' })
    frName: string;

    @Column('varchar', { nullable: false, name: 'calling_code' })
    callingCode: string;

    @Column('varchar', { nullable: false, name: 'alpha_2_code' })
    alpha2Code: string;

    @Column('varchar', { nullable: false, name: 'alpha_3_code' })
    alpha3Code: string;

    @OneToMany(() => ClientEntity, (client) => client.country, { eager: false })
    clients?: ClientEntity[];

    @OneToMany(() => CompanyEntity, (company) => company.country, { eager: false })
    companies?: CompanyEntity[];
}
