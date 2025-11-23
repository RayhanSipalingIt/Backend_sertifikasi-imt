import { Controller, Get, Post, Delete, Param, Body } from '@nestjs/common';
import { PendaftaranService } from './pendaftaran.service';

@Controller('pendaftaran')
export class PendaftaranController {
  constructor(private service: PendaftaranService) {}

  @Get()
  getAll() {
    return this.service.findAll();
  }

  @Get(':id')
  getOne(@Param('id') id: string) {
    return this.service.findOne(Number(id));
  }

  @Post()
  create(@Body() body) {
    return this.service.create(body);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.service.delete(Number(id));
  }
}
