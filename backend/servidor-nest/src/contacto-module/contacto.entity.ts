import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
@Entity()
export class Contacto {
    
@PrimaryGeneratedColumn()
id : number
@Column({length:50})
email : string
@Column({length:400})
descripcion : string


}
