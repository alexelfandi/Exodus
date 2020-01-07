import { Component, OnInit } from '@angular/core';
import { JwtTokenService } from '../servicios/jwt-token.service';
import { AuthService } from '../servicios/auth.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {
    
    
  }

}
