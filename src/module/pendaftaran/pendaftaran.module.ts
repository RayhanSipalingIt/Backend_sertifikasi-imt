import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pendaftaran } from './pendaftaran.entity';
import { PendaftaranController } from './pendaftaran.controller';
import { PendaftaranService } from './pendaftaran.service';

@Module({
  imports: [TypeOrmModule.forFeature([Pendaftaran])],
  controllers: [PendaftaranController],
  providers: [PendaftaranService],
})
export class PendaftaranModule {}
