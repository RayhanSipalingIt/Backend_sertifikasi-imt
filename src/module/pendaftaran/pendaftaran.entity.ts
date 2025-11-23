import { Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Users } from '../users/users.entity';
import { Kelas } from '../kelas/kelas.entity';

@Entity()
export class Pendaftaran {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Users)
  @JoinColumn({ name: 'siswa_id' })
  siswa: Users;

  @ManyToOne(() => Kelas)
  @JoinColumn({ name: 'kelas_id' })
  kelas: Kelas;
}
