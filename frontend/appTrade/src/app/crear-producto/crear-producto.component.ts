import { Component, OnInit } from '@angular/core';
import { Producto } from '../dominio/producto';

@Component({
  selector: 'app-crear-producto',
  templateUrl: './crear-producto.component.html',
  styleUrls: ['./crear-producto.component.css']
})
export class CrearProductoComponent implements OnInit {

  producto: Producto = new Producto();

  files: File[];

  constructor() { }

  ngOnInit() {
  }


  crearProducto(producto: Producto){
    console.log(producto);
    
  }

  fileProgress(event){
  
    this.files = [];

    for (const key in event.target.files) {
      
      this.files.push(event.target.files[key]);
      console.log(event.target.files[key]);

    }
    
    
    
    
  }

}
