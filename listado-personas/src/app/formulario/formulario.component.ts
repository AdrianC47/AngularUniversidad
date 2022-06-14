import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { Persona } from '../persona.model';
import { LoggingService } from '../LoggingService.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
  //providers: [LoggingService] //se añade un proveedor para poder usar un servicio
})  
export class FormularioComponent  {

  @Output() personaCreada = new EventEmitter<Persona>(); //con esto  crearemos un evento que propagará el objeto Persona al componente padre app
  //nombreInput:string = '';
  //apellidoInput:string = '';

  @ViewChild('nombreInput')nombreInputa: ElementRef; //el primero es nombre de la referencia local(en el html) y el segundo es el nombre del atributo
  @ViewChild('apellidoInput')apellidoInputa: ElementRef;

  constructor(private loggingService:LoggingService){}//Concepto de inyeccion de dependencias a través del constructor


  ngOnInit() {    
  }
   
  // agregarPersona(nombreInput: HTMLInputElement,apellidoInput:HTMLInputElement){ esto es en el locale reference
    agregarPersona( ){
    let persona1=new Persona(this.nombreInputa.nativeElement.value,this.apellidoInputa.nativeElement.value); // Esto es propio del view child (el native element)
    this.loggingService.enviarMensajeAConsola('Enviamos persona con nombre: ' +persona1.nombre+" apellido:" +persona1.apellido);//llamo al método de mi servicio
    this.personaCreada.emit(persona1)//con el emit lo propagamos al padre
  }
 

}
