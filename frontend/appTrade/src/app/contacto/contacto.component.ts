import { Component, OnInit } from '@angular/core';
import { Contacto } from '../dominio/contacto';
import { ContactosService } from '../servicios/contactos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

  eldato: Contacto = new Contacto();
  message: string = "";


  constructor(private contactService: ContactosService, private router: Router) { }

  ngOnInit() {
    console.log("ICTIVIDI ALAH");
  }

  enviar(eldato: Contacto):void{
    console.log(eldato);
    this.contactService.getAgregar(eldato).subscribe( (modulo) => {
      
      this.message = "SU MENSAJE HA SIDO ENVIADO";
    });

  }

}
