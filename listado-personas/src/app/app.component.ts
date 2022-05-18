import { Component } from '@angular/core';
import { Persona } from './persona.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo = 'Listado de Personas';
  personas:Persona[]=[new Persona("Adrian","Cabrera"), new Persona("Fernando", "Herrera"), new Persona("Vladimir", "Robles")];
}
