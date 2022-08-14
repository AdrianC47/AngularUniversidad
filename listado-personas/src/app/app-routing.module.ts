import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PersonasComponent } from './personas/personas.component';
import { FormularioComponent } from './personas/formulario/formulario.component';
import { ErrorComponent } from './error/error.component';
import { LoginComponent } from './login/login.component';


//declaro la variable
const routes: Routes = [
  { path: '', component: PersonasComponent },
  { path: 'personas', component: PersonasComponent, children: [ //el children nos sirve para mandar rutas hijas a una padre
      { path: 'agregar', component: FormularioComponent },
      { path: ':id', component: FormularioComponent }, //caso de uso para editar una persona
    ]
  },
  { path: 'login', component: LoginComponent},
  { path: '**', component: ErrorComponent},//OJO que el path para los errores debe ser siempre al ultimo ya que si se pone antes las demás no seran localizadas
]
@NgModule({
  // declarations: [], se quitan las declaraciones y se dejan los imports
  imports: [RouterModule.forRoot(
    //se añade el concepto de routing module

    //pasamos las rutas

    routes
  )
  ],
  //tambien necesitamos exportar el componente , usamos exports
  exports: [RouterModule]
})
export class AppRoutingModule { }
