import { Module } from '@nestjs/common';
import { ContactoController } from './contacto-controller/contacto.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Contacto } from './contacto.entity';
import { ContactoService } from './contacto-service/contacto.service';

@Module({
  imports:[TypeOrmModule.forFeature([Contacto])],
  controllers: [ContactoController],
  providers:[ContactoService]
})
export class ContactoModule {}
