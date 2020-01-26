import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cuenta } from '../dominio/cuenta';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  listaUsuario: Cuenta[] = [];

  constructor(private http: HttpClient) { }



  borrarusuario(id:  number):Observable<Cuenta>{
    return this.http.delete<Cuenta>(`http://localhost:3000/user/${id}`);
  }

  getTodos(): Observable<Cuenta[]>{
    return this.http.get<Cuenta[]>("http://localhost:3000/user");
  }

  getUsuarioById(id: number): Observable<Cuenta>{
    return this.http.get<Cuenta>(`http://localhost:3000/user/${id}`);
  }



  editarUsuario(usuario: Cuenta): Observable<Cuenta>{
    return this.http.put<Cuenta>(`http://localhost:3000/user/${usuario.id}`, usuario);
  }



}
