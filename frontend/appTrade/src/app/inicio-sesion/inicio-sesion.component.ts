import { Component, OnInit } from '@angular/core';
import { Cuenta } from '../dominio/cuenta';
import { LoginService } from '../servicios/login.service';
import { Router } from '@angular/router';
import { JwtTokenService } from '../servicios/jwt-token.service';
import { AuthService } from '../servicios/auth.service';


@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.component.html',
  styleUrls: ['./inicio-sesion.component.css']
})
export class InicioSesionComponent implements OnInit {

  usuario:Cuenta = new Cuenta();

  mensajeError: string = "";

  constructor(private AuthService: AuthService, private loginService: LoginService, private router: Router, private jwtToken: JwtTokenService, authService: AuthService) { }

  ngOnInit() {
    let token = localStorage.getItem("ACCESS_TOKEN");
    console.log(token);
    
    
  }
  login(usuarioNuevo){


    // primero mirar si los datos no estan vacios
    console.log(usuarioNuevo.username);
    

    if ( usuarioNuevo.username == "" || usuarioNuevo.password == "" || usuarioNuevo.username == undefined || usuarioNuevo.password == undefined) {

      this.mensajeError = "No deben haber campos vacios";

    } else {

      this.AuthService.login(usuarioNuevo).subscribe((datos)=>{
      
        console.log("DATOS", datos);
        
  
        if (datos == false || !datos || datos == null) {
  
          this.mensajeError = "El usuario o la contraseña son incorrectos"
  
        } else {
          console.log("DATOS", datos);
  
          this.AuthService.saveToken(datos.access_token, "300s")
          
          localStorage.setItem("usuario", datos.username);
          localStorage.setItem("usuarioRole", datos.role);
          
          this.router.navigateByUrl("productos").then((d)=>{
            window.location.reload();
          });
        }
   
      });


    }

     
   
    
  }
  validar(usuarioNuevo){
    
    
    this.loginService.login(usuarioNuevo).subscribe((datos:any) => {
      
      this.jwtToken.token = datos.token;
      console.log("username puesto en local store");
      // this.router.navigateByUrl("/productos");
      
    });

  }

}
