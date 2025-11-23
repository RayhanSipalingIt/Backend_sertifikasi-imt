import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Users } from '../users/users.entity';
import { Kelas } from '../kelas/kelas.entity';

@Entity({ name: 'pendaftaran' })
export class Pendaftaran {
  @PrimaryGeneratedColumn()
  id: number;

  // FK to students

  @Column({ type: 'int', nullable: false })
  siswa_id: number;

  @ManyToOne(() => Users, (user) => user.pendaftarans, {
    nullable: false,
  })
  @JoinColumn({ name: 'siswa_id' })
  user: Users;

  // FK to courses
  
  @Column({ type: 'int', nullable: false })
  course_id: number;

  @ManyToOne(() => Kelas, (kelas) => kelas.pendaftarans, {
    nullable: false,
  })
  @JoinColumn({ name: 'kelas_id' })
  kelas: Kelas;
}