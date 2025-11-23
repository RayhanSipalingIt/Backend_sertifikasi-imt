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
    return this.repo.find({ relations: ['siswa', 'kelas'] });
  }

  findOne(id: number) {
    return this.repo.findOne({
      where: { id },
      relations: ['siswa', 'kelas'],
    });
  }

  create(data: Partial<Pendaftaran>) {
    const newData = this.repo.create(data);
    return this.repo.save(newData);
  }

  delete(id: number) {
    return this.repo.delete(id);
  }
}
