import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { ProductosComponent } from './productos/productos.component';
import { ContactoComponent } from './contacto/contacto.component';
import { ProductoDetallesComponent } from './producto-detalles/producto-detalles.component';
import { InicioSesionComponent } from './inicio-sesion/inicio-sesion.component';
import { RegistroComponent } from './registro/registro.component';
import { AutenticacionGuard } from './dominio/autenticacion.guard';
import { LogoutComponent } from './logout/logout.component';
import { ListaUsuariosComponent } from './lista-usuarios/lista-usuarios.component';
import { EdicionUsuariosComponent } from './edicion-usuarios/edicion-usuarios.component';
import { PerfilComponent } from './perfil/perfil.component';
import { CrearProductoComponent } from './crear-producto/crear-producto.component';


const routes: Routes = [
  {path: "inicio", component: InicioComponent},
  {path: "productos", component: ProductosComponent, /* canActivate : [AutenticacionGuard] */},
  {path: "contacto", component: ContactoComponent, /* canActivate : [AutenticacionGuard] */},
  {path: "productoDetalles/:id", component: ProductoDetallesComponent, /* canActivate : [AutenticacionGuard] */},
  {path: "inicioSesion", component: InicioSesionComponent},
  {path: "registro", component: RegistroComponent},
  {path: "logout", component: LogoutComponent},
  {path: "listaUsuarios", component: ListaUsuariosComponent},
  {path: "edicionUsuario/:id", component: EdicionUsuariosComponent},
  {path: "perfil", component: PerfilComponent},
  {path: "crearProducto", component: CrearProductoComponent}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
