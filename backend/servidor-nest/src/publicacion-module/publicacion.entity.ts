import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

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

     @Column()

     main : boolean

     @Column()

     tipo : string

     @Column()

     url : string

     @Column()

     publicado : boolean

     @Column()

     publico : boolean

     @Column()

     autor : string

     @Column()

     ultimo_editor : string

     @Column({length:500})

     entradilla : string

     @Column()

     imagen_portada : string

     @Column({length:500})

     texto_completo : string

     @Column()

     tags : string

     @Column({nullable:true})

     version : string

     @Column()

     fecha_creacion : Date

     @Column()

     fecha_ultima_mod : Date


}
