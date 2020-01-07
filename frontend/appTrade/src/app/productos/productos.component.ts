import { Component, OnInit, ViewChild } from '@angular/core';
import { Producto } from '../dominio/producto';
import { Router } from '@angular/router';
import { ProductosService } from '../servicios/productos.service';
import { LoginService } from '../servicios/login.service';
import { JwtTokenService } from '../servicios/jwt-token.service';
import { AuthService } from '../servicios/auth.service';
import { Imagen } from '../dominio/imagen';
import { NgbSlideEvent, NgbSlideEventSource,NgbCarousel  } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css'],
})
export class ProductosComponent implements OnInit {

  esAdmin: boolean = false;

  public listaProductos: Producto[]=[];

  images: string[] = [
    "../../assets/imagenes/1.png",
    "../../assets/imagenes/2.jpg",
    "../../assets/imagenes/3.jpg"

  ];
  showNavigationArrows = true;
  showNavigationIndicators = true;
  pauseOnHover = true;
 
  @ViewChild('mycarousel', {static : true}) carousel: NgbCarousel;

  constructor(private router: Router, private productosService: ProductosService, private loginService: LoginService, private jwtToken: JwtTokenService, private authService: AuthService) {

  }

  ngOnInit() {
   
    this.loginService.login(this.jwtToken.usuario);

    this.productosService.getProductos().subscribe((datos) =>{
      this.listaProductos = datos;
      console.log(this.listaProductos);
    });

    this.esAdmin = this.authService.checkRole();
    
  }

  irADetalles(id: number): void{
    this.router.navigateByUrl(`/productoDetalles/${id}`);
  }

  borrarProducto(producto: Producto):void{
    
    this.productosService.borrarProducto(producto).subscribe((datos)=>{
      this.productosService.getProductos().subscribe((datos) =>{
        this.listaProductos = datos;
        console.log(this.listaProductos);
      });
    });
    
     
  }

  // todo lo del carousel

  onSlide(slideEvent: NgbSlideEvent) {
    console.log(slideEvent.source);
    console.log(NgbSlideEventSource.ARROW_LEFT);
    console.log(slideEvent.paused);
    console.log(NgbSlideEventSource.INDICATOR);
    console.log(NgbSlideEventSource.ARROW_RIGHT);
  }

  startCarousel() {
    this.carousel.cycle();
  }
 
  pauseCarousel() {
    this.carousel.pause();
  }
 
  moveNext() {
    this.carousel.next();
  }
 
  getPrev() {
    this.carousel.prev();
  }
 
  goToSlide(slide) {
    this.carousel.select(slide);
  }

}
