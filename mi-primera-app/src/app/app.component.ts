import { Component } from '@angular/core';

@Component({ //Decorador propio de Angular que esta importado en la primera linea
  selector: 'app-root', //atributo . Es el nombre que se usa dentro del intex.html
  templateUrl: './app.component.html', //plantilla html
  styleUrls: ['./app.component.css'] // estilo css
})
export class AppComponent { //esto es una clase de TypeScript
  title = 'Mi Primera App en Angular';
  saludo = 'Saludos desde Angular';
}
