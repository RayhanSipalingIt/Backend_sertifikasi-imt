import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Pendaftaran } from '../pendaftaran/pendaftaran.entity';

@Entity()
export class Users {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nama: string;

  @Column()
  umur: number;

  @Column()
  gender: string;

  // Relasi ke Pendaftaran
  @OneToMany(() => Pendaftaran, (pendaftaran) => pendaftaran.user)
  pendaftarans: Pendaftaran[];
}
