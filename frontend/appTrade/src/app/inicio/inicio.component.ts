import { Component, OnInit } from '@angular/core';
import { JwtTokenService } from '../servicios/jwt-token.service';
import { AuthService } from '../servicios/auth.service';
import { ProductosService } from '../servicios/productos.service';
import { Producto } from '../dominio/producto';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {


  publicacionesPublicas: Producto[] = [];
  images: string[] = [
    "../../assets/imagenes/1.png",
    "../../assets/imagenes/2.jpg",
    "../../assets/imagenes/3.jpg"

  ];

  constructor(private authService: AuthService, private productosService: ProductosService) { }

  ngOnInit() {
    
    this.productosService.getProductos().subscribe((productos)=>{
      this.publicacionesPublicas = productos.filter((p)=>p.publico == true);;
    });
  }
}
