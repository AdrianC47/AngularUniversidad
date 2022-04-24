import { Component } from "@angular/core";

@Component ({//Decorador de la Clase PersonasComponent
    selector: 'app-personas' , //con esta propiedad/atributo  vamos a indicar el nombre del componente y el nombre se lo va a
    //usar en las paginas html para incluir al componente 
    templateUrl: './personas.component.html',//aqui se define un archivo para incluir el texto html que queremos agregar en el componente
     // template: `<h1>Listado de Personas</h1>
    // <app-persona></app-persona>
    // <app-persona></app-persona>`// Esto se lo conoce como componente en linea , lo cual se recomienda usar solo cuando se tengan pocas lineas html
    //Las hojas de estilo tambien se pueden definir en linea
     styleUrls: ['./personas.component.css'] 
    // styles: [`
    //     h1{
    //         color:blue;
    //     }
    // `]
})
export class PersonasComponent{ //clase 
    desabilitar = false;
    mensaje = 'No se ha agregado ninguna persona';
    agregarPersona(){
        this.mensaje = 'Persona agregada';
    }
}