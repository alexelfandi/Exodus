export class Cuenta {


    constructor(
        public id: number = 1,
        public username?: string,
        public email?: string,
        public password?: string,
        public rol: string = "common",
        public active: boolean = true){

        }
}
