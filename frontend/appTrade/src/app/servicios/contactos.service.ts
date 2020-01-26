import { Injectable } from '@angular/core';
import { Contacto } from '../dominio/contacto';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactosService {

  listaContacto: Contacto[] = []

  constructor(private http: HttpClient) { }

  getTodos(): Observable<Contacto[]>{
    return this.http.get<Contacto[]>("http://localhost:3000/contacto");
  }

  getAgregar(dato: Contacto): Observable<Contacto>{
    return this.http.post<Contacto>("http://localhost:3000/contacto",dato);
  }

  getContactoById(id: number): Observable<Contacto>{
    return this.http.post<Contacto>("http://localhost:3000/getContatoById", id);
  }

  public borrarContacto(id : number): Observable<Contacto>{
    return this.http.delete<Contacto>(`http://localhost:3000/contacto/${id}`);
  }

}
