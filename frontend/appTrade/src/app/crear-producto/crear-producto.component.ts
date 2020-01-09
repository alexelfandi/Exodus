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

  files: File[];

  constructor(public servicio:ProductosService, private router:Router) { }

  ngOnInit() {
  }


  crearProducto(nuevoproducto :Producto):void {
    this.servicio.crearProducto(nuevoproducto).subscribe((datos)=>{
      this.router.navigateByUrl("lista");
    })
  }

  fileProgress(event){
  
    this.files = [];

    for (const key in event.target.files) {
      
      this.files.push(event.target.files[key]);
      console.log(event.target.files[key]);

    }
    
    
    
    
  }

}
