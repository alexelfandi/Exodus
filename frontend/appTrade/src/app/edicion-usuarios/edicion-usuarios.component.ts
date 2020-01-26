import { Component, OnInit } from '@angular/core';
import { Cuenta } from '../dominio/cuenta';
import { UsuariosService } from '../servicios/usuarios.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edicion-usuarios',
  templateUrl: './edicion-usuarios.component.html',
  styleUrls: ['./edicion-usuarios.component.css']
})
export class EdicionUsuariosComponent implements OnInit {

  usuario: Cuenta = new Cuenta();
  message: string = "";

  constructor(private usuarioService: UsuariosService, private activeRouter: ActivatedRoute, private router: Router) { }

  ngOnInit() {

    this.activeRouter.params.subscribe((datos)=>{
      
      this.usuarioService.getUsuarioById(datos.id).subscribe((user)=>{
        console.log("USER", user);
        
        this.usuario = user;
          
      })
      
      
    });
  }

  editar(usuario: Cuenta){
    
    if (usuario.username == "" || usuario.email == "" || usuario.grupo || usuario.activo == null) {
      this.message = "Los campos no pueden quedar vacios"
    } else {
      this.usuarioService.editarUsuario(usuario).subscribe((datos)=>{
      
      this.router.navigateByUrl("/listaUsuarios")
      
    });
    }
    

  }

}
