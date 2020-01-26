import { Identifiers } from '@angular/compiler';

export class Producto {



    constructor(
      
     
        public id?: number,
        public titulo ?: string,
        public main ?: boolean,
        public tipo ?: string,
        public url ?: string,
        public publicado ?: boolean,
        public publico ?: boolean,
        public autor ?: string,
        public ultimo_editor ?: string,
        public entradilla ?: string  ,
        public imagen_portada ?: string ,
        public texto_completo ?: string,
        public tags ?: string,   
        public version ?: string,
        public fecha_creacion ?: Date  ,
        public fecha_ultima_mod ?: Date,
        public valor?: number      
        
        
        ){

    }
}
