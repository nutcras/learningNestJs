import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  ManyToOne,
} from 'typeorm';
import { District } from './district';
import { Country } from './country';

@Entity()
export class Province {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 100, nullable: false })
  name: string;

  @Column({ type: 'varchar', length: 10, unique: true, nullable: false })
  code: string;

  @OneToMany(() => District, (district) => district.province)
  districts: District[];

  @ManyToOne(() => Country, (country) => country.provinces, {
    onDelete: 'CASCADE',
  })
  country: Country;

  @Column()
  countryId: number;
}
