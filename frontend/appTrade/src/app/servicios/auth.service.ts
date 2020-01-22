import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JwtResponseI } from '../dominio/jwt-response-i';
import { tap } from 'rxjs/operators';
import { Observable, BehaviorSubject } from 'rxjs';
import { Cuenta } from '../dominio/cuenta';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {

  AUTH_SERVER: string = 'http://localhost:3000';
  authSubject = new BehaviorSubject(false);
  private token:string;


  constructor(private http: HttpClient, private router: Router) { }

  register(user: Cuenta): Observable<JwtResponseI>{
    return this.http.post<JwtResponseI>(`${this.AUTH_SERVER}/user`, user)
    .pipe(tap(
      (res:JwtResponseI)=>{
        if (res) {
          this.saveToken(res.dataUser.access_token, res.dataUser.expiresIn);
        }
      }
    ));
  }

  login(user: Cuenta): Observable<any>{
    return this.http.post<any>(`http://localhost:3000/user/auth/login`, user);
  }

  logout(): void{
    this.token = '';
    localStorage.removeItem("ACCESS_TOKEN");
    localStorage.removeItem("EXPIRED_IN");
    localStorage.removeItem("usuario");
    localStorage.removeItem("usuarioRole");
    window.location.reload();
  }

  public saveToken(token: string, expireIn: string): void{
    localStorage.setItem("ACCESS_TOKEN", token);
    localStorage.setItem("EXPIRED_IN", expireIn);
    this.token = token
  }

  private getToken(): string{
    if (!this.token) {
      this.token=localStorage.getItem("ACCESS_TOKEN");
    }
    return this.token;
  }

  checkRole(){
    let rol = localStorage.getItem("usuarioRole");

    if (rol == "admin") {
      return true;
    } else {
      return false;
    }
  }

  isLogged(): boolean{
    let token=localStorage.getItem("ACCESS_TOKEN");
    
    if (token == null || token == "") {
      return  false;
      
    } else{
      
      return  true;

    }
  }

}
