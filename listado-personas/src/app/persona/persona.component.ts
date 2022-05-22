import { Component, Input, OnInit } from '@angular/core';
import {Persona} from '../persona.model';

@Component({
  selector: 'app-persona',//Con este selector puede ser llamada esta clase
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent implements OnInit {

  @Input() persona: Persona; //uso la notacion input para envio de datos al componente hijo
  @Input() indice:number;
  constructor() { }

  ngOnInit(): void {
  }

}
