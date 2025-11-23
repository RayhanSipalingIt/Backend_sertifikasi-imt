import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Pendaftaran } from './pendaftaran.entity';

@Injectable()
export class PendaftaranService {
  constructor(
    @InjectRepository(Pendaftaran)
    private repo: Repository<Pendaftaran>,
  ) {}

  findAll() {
    return this.repo.find({relations: ['user', 'kelas']}); // otomatis join user & kelas
  }

  findOne(id: number) {
    return this.repo.findOne({ where: { id } ,  relations: ['user', 'kelas'] });
  }

  create(data: { siswa_id: number; kelas_id: number }) {
    const newData = this.repo.create({
      user: { id: data.siswa_id },
      kelas: { id: data.kelas_id },
    });
    return this.repo.save(newData);
  }

  delete(id: number) {
    return this.repo.delete(id);
  }
}
