import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
@Entity()
export class Contacto {
@PrimaryGeneratedColumn()
id : number
@Column()
email : string
@Column()
descripcion : string


}
