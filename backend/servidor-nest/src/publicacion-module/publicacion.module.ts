import { Module } from '@nestjs/common';
import { PublicacionController } from './publicacion-controller/publicacion.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Publicacion } from './publicacion.entity';
import { PublicacionService } from './publicacion-service/publicacion.service';

@Module({
  imports:[TypeOrmModule.forFeature([Publicacion])],
  providers:[PublicacionService],
  controllers: [PublicacionController],
})
export class PublicacionModule {}
