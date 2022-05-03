import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'calculadora-ejercicio';
  resultado:number = 0;
  a:number = 0;
  b:number = 0;
  sumar(){
     this.resultado = this.a+this.b;
  }
}
