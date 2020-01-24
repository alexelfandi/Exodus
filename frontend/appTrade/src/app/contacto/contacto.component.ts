import { Component, OnInit } from '@angular/core';
import { Contacto } from '../dominio/contacto';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

  dato: Contacto[] = [];

  constructor() { }

  ngOnInit() {
  }

}
