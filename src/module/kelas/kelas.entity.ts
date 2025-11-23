import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Pendaftaran } from '../pendaftaran/pendaftaran.entity';

@Entity()
export class Kelas {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  namaKelas: string;

  @Column()
  kapasitas: number;

  @OneToMany(() => Pendaftaran, (pendaftaran) => pendaftaran.kelas)
  pendaftarans: Pendaftaran[];
}
