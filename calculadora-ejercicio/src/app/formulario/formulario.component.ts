import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent   {

 @Output() resultadoSuma = new EventEmitter<number>();
 
  
 a:number;
 b:number;

 sumar():void{ //no regresa nada por eso le mando el void
    //this.resultado = this.a+this.b;
    let resultado=this.a+this.b;
    this.resultadoSuma.emit(resultado)
 }

}
