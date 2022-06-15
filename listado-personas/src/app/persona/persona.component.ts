import { Component, Input, OnInit } from '@angular/core';
import {Persona} from '../persona.model';
import { PersonasService } from '../personas.service';

@Component({
  selector: 'app-persona',//Con este selector puede ser llamada esta clase
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent   {

  @Input() persona: Persona; //uso la notacion input para envio de datos al componente hijo
  @Input() indice:number;
 
  constructor(private personasService:PersonasService){
  }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    
  }
  emitirSaludo(){
    this.personasService.saludar.emit(this.indice);
  }

 
  
}

