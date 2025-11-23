import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';

// MODULES
import { UsersModule } from './module/users/users.module';
import { KelasModule } from './module/kelas/kelas.module';
import { PendaftaranModule } from './module/pendaftaran/pendaftaran.module';

// ENTITIES
import { Users } from './module/users/users.entity';
import { Kelas } from './module/kelas/kelas.entity';
import { Pendaftaran } from './module/pendaftaran/pendaftaran.entity';

@Module({
  imports: [
    // SETTING DATABASE
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',         // sesuaikan
      password: '',             // sesuaikan
      database: 'manajament',   // nama database di phpMyAdmin
      entities: [Users, Kelas, Pendaftaran],
      synchronize: true,        // auto sync tabel saat development
      autoLoadEntities: true,
    }),

    // REGISTER MODULE
    UsersModule,
    KelasModule,
    PendaftaranModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
