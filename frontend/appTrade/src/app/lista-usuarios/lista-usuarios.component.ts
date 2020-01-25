import { Component, OnInit } from '@angular/core';
import { Cuenta } from '../dominio/cuenta';
import { UsuariosService } from '../servicios/usuarios.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.component.html',
  styleUrls: ['./lista-usuarios.component.css']
})
export class ListaUsuariosComponent implements OnInit {

  usuariosAdmin: Cuenta[] = [];
  usuariosCommon: Cuenta[] = [];
  usuariosEditor: Cuenta[] = [];
  usuariosSubscriptor: Cuenta[] = [];
  usuariosRedactor: Cuenta[] = [];

  constructor(private usuariosService: UsuariosService, private router: Router) { }

  ngOnInit() {
    this.getTodosCommon();
    this.getTodosAdmin();
    this.getTodosEditor();
    this.getTodosSubscriptor();
    this.getTodosredactor();
  }

  getTodosCommon(){
    this.usuariosService.getTodos().subscribe((datos)=>{
      
      this.usuariosCommon = datos.filter((e => e.grupo == "visitante"));
      
    });
  }
  getTodosAdmin(){
    this.usuariosService.getTodos().subscribe((datos)=>{
      
      this.usuariosAdmin = datos.filter((e => e.grupo == "admin"));
      
    });
  }
  getTodosEditor(){
    this.usuariosService.getTodos().subscribe((datos)=>{
      
      this.usuariosEditor = datos.filter((e => e.grupo == "editor"));
      
    });
  }
  getTodosredactor(){
    this.usuariosService.getTodos().subscribe((datos)=>{
      
      this.usuariosRedactor = datos.filter((e => e.grupo == "redactor"));
      
    });
  }
  getTodosSubscriptor(){
    this.usuariosService.getTodos().subscribe((datos)=>{
      
      this.usuariosSubscriptor = datos.filter((e => e.grupo == "suscriptor"));
      
    });
  }

  editarUsuario(usuario: Cuenta){
    console.log(usuario);
    
    this.router.navigateByUrl(`/edicionUsuario/${usuario.id}`);
  }

  borrarUsuario(id : number){
    this.usuariosService.borrarusuario(id).subscribe((datos)=>{
      
      if (datos.grupo == "admin") {
        this.getTodosAdmin();
      } else if (datos.grupo == "visitante"){
        this.getTodosCommon();
      } else if (datos.grupo == "editor"){
        this.getTodosEditor();
      } else if (datos.grupo == "subscriptor"){
        this.getTodosSubscriptor();
      } else if (datos.grupo == "redactor"){
        this.getTodosredactor();
      }

      
      
      
      
      
    });
  }

}
