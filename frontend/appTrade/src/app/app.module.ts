import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { ProductosComponent } from './productos/productos.component';
import { ContactoComponent } from './contacto/contacto.component';
import { PerfilComponent } from './perfil/perfil.component';
import { ProductoDetallesComponent } from './producto-detalles/producto-detalles.component';
import { RegistroComponent } from './registro/registro.component';
import { InicioSesionComponent } from './inicio-sesion/inicio-sesion.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { JwtModule, JWT_OPTIONS } from '@auth0/angular-jwt';
import { JwtTokenService } from './servicios/jwt-token.service';
import { AuthService } from './servicios/auth.service';
import { AuthInterceptor } from './auth-interceptor';
import { LogoutComponent } from './logout/logout.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {NgbPaginationModule, NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';
import { ListaUsuariosComponent } from './lista-usuarios/lista-usuarios.component';
import { EdicionUsuariosComponent } from './edicion-usuarios/edicion-usuarios.component';
import { CrearProductoComponent } from './crear-producto/crear-producto.component';

export function jwtOptionsFactory(tokenService: JwtTokenService) {
  return {
    tokenGetter: () => {
      return tokenService.token;
    },
    whitelistedDomains: ["localhost:3000"],
    blacklistedRouters: ["localhost:3000/login"]
  }
}

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    ProductosComponent,
    ContactoComponent,
    PerfilComponent,
    ProductoDetallesComponent,
    RegistroComponent,
    InicioSesionComponent,
    LogoutComponent,
    ListaUsuariosComponent,
    EdicionUsuariosComponent,
    CrearProductoComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    JwtModule.forRoot({
      jwtOptionsProvider: {
        provide: JWT_OPTIONS,
        useFactory: jwtOptionsFactory,
        deps: [JwtTokenService]
      }
    }),
    NgbModule,
    NgbPaginationModule, 
    NgbAlertModule
  ],
  providers: [JwtTokenService, AuthService,
    
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
