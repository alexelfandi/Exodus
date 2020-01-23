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
    
    return this.http.post<Cuenta>("http://localhost:3000/user/auth/login", usuario);
  }

  public register(usuario: Cuenta){
    return this.http.post<Cuenta>("http://localhost:3000/user", usuario);
  }

  public isLogged(): boolean{
    let token=localStorage.getItem("ACCESS_TOKEN");
    
    if (token == null || token == "") {
      return  false;
      
    } else{
      
      return  true;

    }
  }
}
