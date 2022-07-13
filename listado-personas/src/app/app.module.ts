import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { PersonaComponent } from './persona/persona.component';
import { FormularioComponent } from './formulario/formulario.component';
import { LoggingService } from './LoggingService.service';
import { PersonasService } from './personas.service';


@NgModule({
  declarations: [
    AppComponent,
    PersonaComponent,
    FormularioComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule//modulo para las rutas
  ],
  providers: [LoggingService,PersonasService], // se añade aqui mi proveedor de mi servicio para no estar añadiendo en cada clase
  bootstrap: [AppComponent]
})
export class AppModule { }
