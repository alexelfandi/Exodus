import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cuenta } from '../dominio/cuenta';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  public login(usuario: Cuenta): Observable<Cuenta>{
    console.log(usuario);
    
    return this.http.post<Cuenta>("http://localhost:3000/login", usuario);
  }

  public register(usuario: Cuenta){
    return this.http.post<Cuenta>("http://localhost:3000/register", usuario);
  }
}
