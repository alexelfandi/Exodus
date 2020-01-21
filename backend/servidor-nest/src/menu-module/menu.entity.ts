import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
@Entity()
export class Menu {
    @PrimaryGeneratedColumn()
    
    id : number

    @Column({length:50})

    titulo : string

    @Column({})

    icono : string

    @Column()

    posicion_icono : string

    @Column({})
    
    main : boolean

    @Column()

    enlaces : string

    @Column()

    publicado : boolean

    @Column()

    publico : boolean

    @Column({})

    url : string

    @Column()
    
    
    autor: string

    @Column()

    ultimo_editor : string

    @Column({nullable:true})

    version : string
    @Column()

    fecha_creacion : Date

    @Column()

    fecha_ultima_mod : Date

    
}

