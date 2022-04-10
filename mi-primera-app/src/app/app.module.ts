import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

@NgModule({ // esto es un decorador, los decoradores se usan para agregar características extra a la definicion de la clase AppModule
  declarations: [ //atributo
    AppComponent
  ],
  imports: [ //atributo
    BrowserModule
  ],
  providers: [], //atributo
  bootstrap: [AppComponent] //atributo que indica como se levanta la aplicación 
})
export class AppModule { }
