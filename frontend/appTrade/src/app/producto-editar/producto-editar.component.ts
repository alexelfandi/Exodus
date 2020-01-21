import { Component, OnInit } from '@angular/core';
import { Producto } from '../dominio/producto';
import { ProductosService } from '../servicios/productos.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-producto-editar',
  templateUrl: './producto-editar.component.html',
  styleUrls: ['./producto-editar.component.css']
})
export class ProductoEditarComponent implements OnInit {

  productoEditar: Producto = new Producto();
  listaProductos: Producto[]=[];
  idProducto: number;
  producto: Producto;

  constructor(public servicio: ProductosService,public router: Router,public route: ActivatedRoute) { }

  ngOnInit() {

    this.servicio.getProductos().subscribe((datos)=>{
      this.listaProductos = datos;
      console.log(this.listaProductos);
      this.producto = this.listaProductos.filter(producto => producto.id == this.idProducto)[0];
      
    });

    
    

    // cogemos el parametro (id)

    this.route.params.subscribe(params => {
      this.idProducto = params.id;
    });

  }

}
