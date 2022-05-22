import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { FormularioComponent } from './formulario/formulario.component';
import { ResultadoComponent } from './resultado/resultado.component';

@NgModule({
  declarations: [
    AppComponent,
    FormularioComponent,
    ResultadoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule //este modelo es necesario para el two way binding, es modulo propio de Angular
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
