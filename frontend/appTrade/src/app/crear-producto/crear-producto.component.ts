import { ProductosService } from './../servicios/productos.service';
import { Component, OnInit } from '@angular/core';
import { Producto } from '../dominio/producto';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crear-producto',
  templateUrl: './crear-producto.component.html',
  styleUrls: ['./crear-producto.component.css']
})
export class CrearProductoComponent implements OnInit {

  producto: Producto = new Producto();

  public listaProductos: Producto[] = [];
  constructor(public servicio:ProductosService, private router:Router) { }

  ngOnInit() {
  }

  crearProducto(nuevoproducto :Producto):void {
    this.servicio.crearProducto(nuevoproducto).subscribe((datos)=>{
      console.log(nuevoproducto);
      
    })
  }
}
