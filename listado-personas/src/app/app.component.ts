import { Component } from '@angular/core';
import { Persona } from './persona.model';
import { LoggingService } from './LoggingService.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo = 'Listado de Personas';
  personas:Persona[]=[new Persona("Adrian","Cabrera"), new Persona("Fernando", "Herrera"), new Persona("Vladimir", "Robles")];


  constructor(private loggingService:LoggingService){
    
  }

  personaAgregada(persona:Persona){
    this.loggingService.enviarMensajeAConsola("agregamos al arreglo la nueva persona:" + persona.nombre + " apellido: " +persona.apellido);
    this.personas.push(persona);
  }

}

