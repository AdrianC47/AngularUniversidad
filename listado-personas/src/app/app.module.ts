import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { PersonaComponent } from './personas/persona/persona.component';
import { FormularioComponent } from './personas/formulario/formulario.component';
import { LoggingService } from './LoggingService.service';
import { PersonasService } from './personas.service';
import { PersonasComponent } from './personas/personas.component';
import { ErrorComponent } from './error/error.component';
import { DataServices } from './data.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    PersonaComponent,
    FormularioComponent,
    PersonasComponent,
    ErrorComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,//modulo para las rutas
    HttpClientModule
  ],
  providers: [LoggingService,PersonasService, DataServices], // se añade aqui mi proveedor de mi servicio para no estar añadiendo en cada clase
  bootstrap: [AppComponent]
})
export class AppModule { }
