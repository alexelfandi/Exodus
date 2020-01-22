import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../servicios/productos.service';
import { ActivatedRoute } from '@angular/router';
import { Producto } from '../dominio/producto';

@Component({
  selector: 'app-producto-editar',
  templateUrl: './producto-editar.component.html',
  styleUrls: ['./producto-editar.component.css']
})
export class ProductoEditarComponent implements OnInit {
  
  listaProductos: Producto[]=[];
  idProducto: number;
  producto: Producto;

  constructor(private productosService: ProductosService, private activatedRouter: ActivatedRoute) { }

  ngOnInit() {

    this.activatedRouter.params.subscribe(params => {
      this.idProducto = params.id;
    });

    this.productosService.getProductos().subscribe((datos)=>{
      this.listaProductos = datos;
      console.log(this.listaProductos);
      this.producto = this.listaProductos.filter(producto => producto.id == this.idProducto)[0];
      
    });


  }

  /*salvar(){
    this.servicio.actualizar(this.productoEditar).pipe(flatMap(res => this.servicio.buscarTodos()))
    .subscribe(()=>{
      this.router.navigate(['/lista']);
    });
  }*/



}
