import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/servicios/login.service';
import { ConfiguracionServicio } from '../../servicios/configuracion.service';

@Component({
  selector: 'app-cabecero',
  templateUrl: './cabecero.component.html',
  styleUrls: ['./cabecero.component.css']
})
export class CabeceroComponent implements OnInit {
  isLoggedIn: boolean;//variable para saber si el usuario ya está logeado
  loggedInUser:  string;//variable (email) para saber cual es el usuario que está logeado
  permitirRegistro:boolean;
  mostrarREsponsive_menu = false;
  
  constructor(private logginService:LoginService,private router: Router, private ConfiguracionServicio:ConfiguracionServicio) { }

  ngOnInit(): void {
    this.logginService.getAuth().subscribe(auth => {
      if(auth){//si el objeto auth existe entonces
        this.isLoggedIn= true;//cambiamos la bandera
        this.loggedInUser= auth.email; //asignamos el valor del email del usuario
      } else{
        this.isLoggedIn=false;
      }
    })
    this.ConfiguracionServicio.getConfiguracion().subscribe(configuracion=>{
      this.permitirRegistro=configuracion.permitirRegistro;
    })
  }

  logout(){
    this.logginService.logout();
    this.isLoggedIn=false;
    this.router.navigate(['/login']);
  }

}
