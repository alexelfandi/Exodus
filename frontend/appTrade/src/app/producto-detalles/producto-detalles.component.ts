import { Component, OnInit } from '@angular/core';
import { Producto } from '../dominio/producto';
import { ProductosService } from '../servicios/productos.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-producto-detalles',
  templateUrl: './producto-detalles.component.html',
  styleUrls: ['./producto-detalles.component.css']
})
export class ProductoDetallesComponent implements OnInit {

  listaProductos: Producto[]=[];
  idProducto: number;
  producto: Producto;


  constructor(private productosService: ProductosService, private activatedRouter: ActivatedRoute) { }

  ngOnInit() {

    // sacamos la lista

    this.productosService.getProductos().subscribe((datos)=>{
      this.listaProductos = datos;
      console.log(this.listaProductos);
      this.producto = this.listaProductos.filter(producto => producto.id == this.idProducto)[0];
      
    });

    
    

    // cogemos el parametro (id)

    this.activatedRouter.params.subscribe(params => {
      this.idProducto = params.id;
    });



    
    
    
    
     
    
  }

}
