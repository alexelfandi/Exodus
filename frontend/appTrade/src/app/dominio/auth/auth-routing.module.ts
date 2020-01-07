import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from '../../inicio/inicio.component';
import { ProductosComponent } from '../../productos/productos.component';
import { ContactoComponent } from '../../contacto/contacto.component';
import { ProductoDetallesComponent } from '../../producto-detalles/producto-detalles.component';
import { InicioSesionComponent } from '../../inicio-sesion/inicio-sesion.component';
import { RegistroComponent } from '../../registro/registro.component';
import { AutenticacionGuard } from '../autenticacion.guard';



const routes: Routes = [
  {path: "inicio", component: InicioComponent},
  {path: "productos", component: ProductosComponent, canActivate : [AutenticacionGuard]},
  {path: "contacto", component: ContactoComponent, canActivate : [AutenticacionGuard]},
  {path: "productoDetalles/:id", component: ProductoDetallesComponent, canActivate : [AutenticacionGuard]},
  {path: "inicioSesion", component: InicioSesionComponent},
  {path: "registro", component: RegistroComponent}


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
