import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";


@Entity()
export class User {

    /* Usuarios: ID, Nombre de usuario(único), email(único), avatar (string - url imagen del usuario),
    contraseña encriptada, activo (boolean),
    clave_activación (hash), grupos de usuarios ['admin','redactor','editor', 'subscriber', 'visitor'],
    API_TOKEN_KEY, versión, fecha_creacion, ultima_fecha_modif*/
    @PrimaryGeneratedColumn()
    id : number

    @Column({length:50, unique : true})

    username : string

    @Column({unique : true})

    email : string

    @Column()

    avatar : string

    @Column({})
    //No se como encriptarlo
    password : string
    @Column()

    activo : boolean

    @Column()

    grupo : string

    @Column()

    API_TOKEN_KEY : string

    @Column({nullable:true})

    version : string

    @Column()

    fecha_creacion : Date

    @Column()

    fecha_ultima_mod : Date


}

