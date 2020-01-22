export class Cuenta {


    constructor(
        public id?: number,
        public username?: string,
        public email?: string,
        public avatar?: string,
        public password?: string,
        public grupo: string = "common",
        public activo: boolean = true,
        public API_TOKEN_KEY?: string,
        public expiresIn?: string,
        public version?: string,
        public fecha_creacion?: Date,
        public fecha_ultima_mod?: Date


        ){

        }
}
