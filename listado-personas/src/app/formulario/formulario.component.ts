import { Component, EventEmitter, Output } from '@angular/core';
import { Persona } from '../persona.model';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent  {

  @Output() personaCreada = new EventEmitter<Persona>(); //con esto  crearemos un evento que propagará el objeto Persona al componente padre app
  nombreInput:string = '';
  apellidoInput:string = '';

  agregarPersona(){
    let persona1=new Persona(this.nombreInput,this.apellidoInput);
  //  this.personas.push(persona1);
    this.personaCreada.emit(persona1)//con el emit lo propagamos al padre
  }
 

}
