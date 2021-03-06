import { Component, OnInit } from '@angular/core';
import { AuthService } from './servicios/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  nombreUsuario: string;
  logeado: boolean = true;
  title = 'Exodus';
  esAdmin:boolean = false;

  constructor(private authService: AuthService){}

  ngOnInit(): void {
    
    // Si es rol es admin, vera lo de usuarios
    if (this.authService.checkRole() == "admin") {
      this.esAdmin = true;
    }
    
    
  
    this.logeado = this.authService.isLogged();
    if (this.logeado) {
      this.nombreUsuario = localStorage.getItem("usuario");
    }
  }
  
  logout(){
    this.authService.logout();
    this.logeado = this.authService.isLogged();
    if (this.logeado) {
      this.nombreUsuario = localStorage.getItem("usuario");
    }
  }
  perfil(){
    console.log("hola");
    
  }
}
