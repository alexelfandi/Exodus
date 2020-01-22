import { Component, OnInit } from '@angular/core';
import { Cuenta } from '../dominio/cuenta';
import { UsuariosService } from '../servicios/usuarios.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.component.html',
  styleUrls: ['./lista-usuarios.component.css']
})
export class ListaUsuariosComponent implements OnInit {

  usuariosAdmin: Cuenta[] = [];
  usuariosCommon: Cuenta[] = [];

  constructor(private usuariosService: UsuariosService, private router: Router) { }

  ngOnInit() {
    this.getTodosCommon();
    this.getTodosAdmin();
  }

  getTodosCommon(){
    this.usuariosService.getTodos().subscribe((datos)=>{
      
      this.usuariosCommon = datos.filter((e => e.grupo == "common"));
      
    });
  }
  getTodosAdmin(){
    this.usuariosService.getTodos().subscribe((datos)=>{
      
      this.usuariosAdmin = datos.filter((e => e.grupo == "admin"));
      
    });
  }

  editarUsuario(usuario: Cuenta){
    console.log(usuario);
    
    this.router.navigateByUrl(`/edicionUsuario/${usuario.id}`);
  }

}
