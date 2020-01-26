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
  message: string = "";

  public listaProductos: Producto[] = [];
  constructor(public servicio:ProductosService, private router:Router) { }

  ngOnInit() {
  }

  crearProducto(nuevoproducto :Producto):void {

    if (nuevoproducto.titulo == "" || nuevoproducto.valor == null || nuevoproducto.tipo == "" || nuevoproducto.tags == "" || nuevoproducto.texto_completo == "") {
      this.message = "Los campos no pueden estar vacios"
    } else {
      console.log(nuevoproducto);
      
      this.servicio.crearProducto(nuevoproducto).subscribe((datos)=>{
        console.log("EEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEee"+datos);
        this.router.navigateByUrl("/productos")
        
      })
    }

  }
}
