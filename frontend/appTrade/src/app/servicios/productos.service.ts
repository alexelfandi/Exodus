import { Injectable } from '@angular/core';
import { Producto } from '../dominio/producto';
import { $, promise } from 'protractor';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {


  constructor(private http: HttpClient) {
    
  }

  public getProductos(): Observable<Producto[]>{
    return this.http.get<Producto[]>("http://localhost:3000/publicacion");
    
  }

  public borrarProducto(id : number): Observable<Producto>{
    return this.http.delete<Producto>(`http://localhost:3000/publicacion/${id}`);
  }
  public crearProducto(nuevoProducto:Producto): Observable<Producto>{
    return this.http.post<Producto>("http://localhost:3000/publicacion", nuevoProducto)
  }
}
