import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { JwtTokenService } from '../servicios/jwt-token.service';

@Injectable({
  providedIn: 'root'
})
export class AutenticacionGuard implements CanActivate {


  constructor(private router: Router, private jwtokent: JwtTokenService){}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    console.log("ha entrado");
    
    if(this.jwtokent.token){
      return true;
    } 

    this.router.navigateByUrl("/inicioSesion")
    return false;
  }
  
}
