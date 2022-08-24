import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TableroComponent } from './componentes/tablero/tablero.component';
import { LoginComponent } from './componentes/login/login.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { ConfiguracionComponent } from './componentes/configuracion/configuracion.component';
import { EditarClienteComponent } from './componentes/editar-cliente/editar-cliente.component';
import { NoEncontradoComponent } from './componentes/no-encontrado/no-encontrado.component';
import { AuthGuard } from './guardianes/auth.guard';

const routes: Routes = [
   {path: '', component: TableroComponent, canActivate:[AuthGuard]}, //con el canActivate protejemos el acceso con los guardianes
   {path: 'login', component:LoginComponent}, //es decir indicamos que paginas requieres de autenticacion para su acceso como las que no
   {path: 'registrarse', component:RegistroComponent},
   {path: 'configuracion', component:ConfiguracionComponent, canActivate:[AuthGuard]},
   {path: 'cliente/editar/:id', component:EditarClienteComponent, canActivate:[AuthGuard]},
   {path: '**', component: NoEncontradoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
