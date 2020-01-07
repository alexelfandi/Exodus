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
    
    
    this.esAdmin = this.authService.checkRole();
  
    this.logeado = this.authService.isLogged();
    if (this.logeado) {
      this.nombreUsuario = localStorage.getItem("usuario");
    }
  }
  
  logout(){
    this.authService.logout();
  }
  perfil(){
    console.log("hola");
    
  }
}
