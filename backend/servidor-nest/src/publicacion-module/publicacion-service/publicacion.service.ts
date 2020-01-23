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

    save(publicacionNueva: Publicacion):Promise<Publicacion>{
        return this.publicacionRepository.save(publicacionNueva);
    }

   /* CrearTipoPublicacion(tipo: Publicacion):Promise<Publicacion>{
        return this.publicacionRepository.save(tipo.tipo);
    }*/

    async BuscarporId(id: number): Promise<Publicacion>{
        return this.publicacionRepository.findOne(id);
    }

    async BuscarporTipo(tipo: string): Promise<Publicacion>{
        return this.publicacionRepository.findOne(tipo);
    }

    ConsultarPublicado(publicado: boolean, id:number): Promise<Publicacion>{
        
        const consulta = this.publicacionRepository.findOne(id);

        if((consulta != undefined)&&(this.Publica.publicado == publicado)){

            return 

        }
            
         
        return null;
        
    }

    async Eliminar(id: number): Promise<Publicacion>{
        const Objeto = await this.publicacionRepository.findOne(id);
        return this.publicacionRepository.remove(Objeto);
    }


}
