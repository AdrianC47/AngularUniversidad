import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PersonasComponent } from './personas/personas.component';
import { PersonaComponent } from './persona/persona.component';

//En los decoradores se indican  cuales son los componentes que se usaran en nuestra aplicación
@NgModule({ // esto es un decorador, los decoradores se usan para agregar características extra a la definicion de la clase AppModule
  declarations: [ //atributo
    AppComponent, PersonasComponent, PersonaComponent    //AppComponent es un componente por default
  ],
  imports: [ //atributo
    BrowserModule
  ],
  providers: [], //atributo
  bootstrap: [AppComponent] //atributo que indica como se levanta la aplicación por medio del componente AppComponent
})
export class AppModule { } //este es el nombre de la clase
