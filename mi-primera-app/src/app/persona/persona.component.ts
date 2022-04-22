import { Component} from '@angular/core';

@Component({ //decorador
  selector: 'app-persona', //selector
  templateUrl: './persona.component.html', //plantilla
  styleUrls: ['./persona.component.css'] //hoja de estilo
})
export class PersonaComponent   {

  nombre: string ='Adrian'; //atributo
  apellido: string = 'Cabrera'; // no es necesario indicar el tipo de atributo
  edad: number=22;
  //private edad: number =22;
  /*
  getEdad() :number{
    return this.edad;
  }
  */
}

