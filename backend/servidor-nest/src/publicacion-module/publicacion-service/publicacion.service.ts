import { Injectable } from '@nestjs/common';
import { Publicacion } from '../publicacion.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { create } from 'domain';
import { PublicacionModule } from '../publicacion.module';

@Injectable()
export class PublicacionService {

    Publica : Publicacion;

    constructor(
        @InjectRepository(Publicacion)
        private readonly publicacionRepository: Repository<Publicacion>
    ){}

    BuscalosTodos(): Promise<Publicacion[]>{
        return this.publicacionRepository.find();
    }

    BuscalosTodosPublicos(): Promise<Publicacion[]>{
        return this.publicacionRepository.find({where : {publico: true}});
    }

    save(publicacionNueva: Publicacion):Promise<Publicacion>{
        return this.publicacionRepository.save(publicacionNueva);
    }

    async BuscarporId(id: number): Promise<Publicacion>{
        return this.publicacionRepository.findOne(id);
    }

    async BuscarporTipo(tipo: string): Promise<Publicacion>{
        return this.publicacionRepository.findOne(tipo);
    }

    async Eliminar(id: number): Promise<Publicacion>{
        const Objeto = await this.publicacionRepository.findOne(id);
        return this.publicacionRepository.remove(Objeto);
    }


}
