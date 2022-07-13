import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PersonasComponent } from './personas/personas.component';
import { FormularioComponent } from './personas/formulario/formulario.component';


//declaro la variable
const routes: Routes=[
  {path:'',component:PersonasComponent},
  {path:'personas',component:PersonasComponent},
  {path:'personas/agregar',component: FormularioComponent},
  {path:'personas/:id',component:FormularioComponent}, //caso de uso para editar una persona
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
  exports:[RouterModule]
})
export class AppRoutingModule { }
