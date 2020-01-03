import { Identifiers } from '@angular/compiler';

export class Producto {



    constructor(public id: number = 0,public nombre: string = "",public imagenes: string[]= ["../../assets/imagenes/1.png"],public descripcion: string = "",public valor: number = 0, public referencias: string[]=['']){

    }
}
