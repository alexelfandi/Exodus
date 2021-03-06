import { Component, OnInit } from '@angular/core';
import { JwtTokenService } from '../servicios/jwt-token.service';
import { LoginService } from '../servicios/login.service';
import { Router } from '@angular/router';
import { Cuenta } from '../dominio/cuenta';
import { $ } from 'protractor';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  constructor(private loginService: LoginService, private router: Router) { }

  usuario:Cuenta = new Cuenta();
  message: string = "";
  password2: string = "";

  ngOnInit() {
    
    this.message = "";
    
  }

  register(usuario: Cuenta){
    
    if (usuario.username == "" || usuario.email == "" || usuario.password == "" || usuario.username == null || usuario.email == null) {
      
      this.message = "Los campos no pueden quedar vacios";

    } else {
      if (this.password2 == usuario.password) {

        usuario.activo = true;
        usuario.grupo = "visitante";
        this.loginService.register(usuario).subscribe((datos)=>{
          console.log("datos en el servicio frontend", datos);
          
          
          this.router.navigateByUrl("/inicioSesion");
        });
      } else {
        this.message = " * Las contraseñas no son identicas";
        
      }
    }


  }

}
