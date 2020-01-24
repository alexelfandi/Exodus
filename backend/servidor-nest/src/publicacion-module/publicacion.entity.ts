import { Entity, PrimaryGeneratedColumn, Column, Double } from "typeorm";

@Entity()
export class Publicacion {

    /*Publicaciones: id, título, main (boolean), tipo (pagina,post,listado,post_subscripción, menu, bloques ..),
      url [], publicado (boolean),publico (boolean), autor, ultimo_editor,
       entradilla, imagen_portada, texto_completo, tags [],
     versión, fecha_creacion, ultima_fecha_modif*/

     @PrimaryGeneratedColumn()
     
     id : number

     @Column({length : 60})

     titulo : string 

     @Column({nullable:true})

     main : boolean

     @Column({default:""})

     tipo : string

     @Column({nullable:true})

     url : string

     @Column({nullable:true})

     publicado : boolean

     @Column({nullable:true})

     publico : boolean

     @Column({nullable:true})

     autor : string

     @Column({nullable:true})

     ultimo_editor : string

     @Column({length:500,nullable:true})

     entradilla : string

     @Column({nullable:true})

     imagen_portada : string

     @Column({length:500})

     texto_completo : string

     @Column({nullable:true})

     tags : string

     @Column({nullable:true})

     version : string

     @Column({nullable:true})

     fecha_creacion : Date

     @Column({nullable:true})

     fecha_ultima_mod : Date

     @Column({type: "float"})

     valor: Double


}
