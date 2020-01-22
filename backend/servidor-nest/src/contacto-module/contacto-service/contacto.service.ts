import { Injectable } from '@nestjs/common';
import { Contacto } from '../contacto.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ContactoService {

    constructor(@InjectRepository(Contacto) private readonly contactoRepository : Repository<Contacto>){}

    findAll(): Promise<Contacto[]> {
        return this.contactoRepository.find();
    }
    save(newContacto : Contacto): Promise<Contacto> {
        return this.contactoRepository.save(newContacto);
    }

    async findById(id: number): Promise<Contacto> {
        return this.contactoRepository.findOne(id);
    }

    async delete(id: number): Promise<Contacto> {
        const promesaObjeto = await this.contactoRepository.findOne(id);
        return this.contactoRepository.remove(promesaObjeto);
    }



}
