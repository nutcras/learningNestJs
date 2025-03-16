import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Province } from './province';

@Entity()
export class District {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 100, nullable: false })
  name: string;

  @Column({ type: 'varchar', length: 10, unique: true, nullable: false })
  code: string;

  @Column({ type: 'int', nullable: false })
  province_id: number;

  @ManyToOne(() => Province, (province) => province.districts, {
    onDelete: 'CASCADE',
  })
  province: Province;

  @Column()
  provinceId: number;
}
