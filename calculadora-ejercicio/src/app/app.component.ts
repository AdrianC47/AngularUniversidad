import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Aplicación de Calculadora';
  resultadoPadre:number = 0;
 

  // sumar():void{ //no regresa nada por eso le mando el void
  //    this.resultado = this.a+this.b;
  // }
  procesarResultado(resultado:number){
   this.resultadoPadre=resultado;
  }
}
