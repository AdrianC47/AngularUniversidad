import { Component } from '@angular/core';//Como es propio de Angular, le importo de la libreria

@Component({ //Decorador propio de Angular que esta importado en la primera linea
  selector: 'app-root', //atributo . Es el nombre que se usa dentro del intex.html
  templateUrl: './app.component.html', //plantilla html
  styleUrls: ['./app.component.css'] // estilo css
})
export class AppComponent { //esto es una clase de TypeScript
  title = '¡¡¡Hello friend desde Angular!!';
  // saludo = 'Saludos desde Angular';
}
