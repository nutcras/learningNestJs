import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Province } from './province';

@Entity()
export class Country {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 100 })
  name: string;

  @OneToMany(() => Province, (province) => province.country)
  provinces: Province[];
}
