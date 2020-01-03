import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
import {AuthRoutingModule} from './auth-routing.module'
import { RegistroComponent } from '../../registro/registro.component';
import { InicioSesionComponent } from '../../inicio-sesion/inicio-sesion.component';
import { Routes } from '@angular/router';
import { AuthService } from '../../servicios/auth.service';

const routes: Routes = [
  
  {path:"", redirectTo: '/auth', pathMatch:'full'},
  {path:"auth", loadChildren: './auth/auth.module#AuthModule'}


];

@NgModule({
  declarations: [RegistroComponent,  InicioSesionComponent],
  imports: [
    CommonModule,
    FormsModule,
    AuthRoutingModule,
    HttpClientModule

  ],
  providers:[AuthService]
})
export class AuthModule { }
