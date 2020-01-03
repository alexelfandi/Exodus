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

  constructor(private AuthService: AuthService, private loginService: LoginService, private router: Router, private jwtToken: JwtTokenService) { }

  ngOnInit() {
    let token = localStorage.getItem("ACCESS_TOKEN");
    console.log(token);
    
    
  }
  login(usuarioNuevo){
    this.AuthService.login(usuarioNuevo).subscribe((datos)=>{
      
      
      localStorage.setItem("usuario", datos.dataUser.username);
      localStorage.setItem("usuarioRole", datos.dataUser.rol);
      this.router.navigateByUrl("productos").then((d)=>{
        window.location.reload();
      });
    });
    
  }
  validar(usuarioNuevo){
    
    
    this.loginService.login(usuarioNuevo).subscribe((datos:any) => {
      
      this.jwtToken.token = datos.token;
      console.log("username puesto en local store");
      window.location.reload();
      
      
      
      // this.router.navigateByUrl("/productos");
      
    });

  }

}
