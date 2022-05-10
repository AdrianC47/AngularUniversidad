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
    titulo ="Ingeniero en Ciencias de la Computación";
    mostrar = false;
   
    agregarPersona(){
        this.mensaje = 'Persona agregada';
        this.mostrar=true;
    }
    // el siguiente metodo es del event binding
    // modificarTitulo(event: Event){ // variable event de tipo Event
    //     console.log('Entrando a metodo modificar titulo');
    //     this.titulo= (<HTMLInputElement>event.target).value; //Para poder acceder a la variable event debo poner el target ya que hace referencia al
    //  // elemento html que se ejecuta en ese momento es decir  hace referencia al input. Pero se debe hacer  una conversion para poder
     //acceder al elemento lo cual se hace con el <HTMLInputElement>
     
    //}
}