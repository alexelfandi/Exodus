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


  getTodos(): Observable<Cuenta[]>{
    return this.http.get<Cuenta[]>("http://localhost:3000/listaUsuarios");
  }

  getUsuarioById(id: number): Observable<Cuenta>{
    return this.http.post<Cuenta>("http://localhost:3000/getUsuarioById", id);
  }

  editarUsuario(usuario: Cuenta): Observable<Cuenta>{
    return this.http.post<Cuenta>("http://localhost:3000/editarUsuario", usuario);
  }
}
