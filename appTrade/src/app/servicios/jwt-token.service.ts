import { Injectable } from '@angular/core';
import { Cuenta } from '../dominio/cuenta';

@Injectable({
  providedIn: 'root'
})
export class JwtTokenService {


  // se usa como session

  public token:string;
  public usuario: Cuenta;

  constructor() { }

  getToken(){
    return this.token;
  }
}
