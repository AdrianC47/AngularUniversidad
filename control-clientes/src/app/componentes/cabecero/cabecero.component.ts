import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/servicios/login.service';

@Component({
  selector: 'app-cabecero',
  templateUrl: './cabecero.component.html',
  styleUrls: ['./cabecero.component.css']
})
export class CabeceroComponent implements OnInit {
  isLoggedIn: boolean;//variable para saber si el usuario ya está logeado
  loggedInUser:  string;//variable (email) para saber cual es el usuario que está logeado
  
  mostrarREsponsive_menu = false;
  
  constructor(private logginService:LoginService,private router: Router) { }

  ngOnInit(): void {
    this.logginService.getAuth().subscribe(auth => {
      if(auth){//si el objeto auth existe entonces
        this.isLoggedIn= true;//cambiamos la bandera
        this.loggedInUser= auth.email; //asignamos el valor del email del usuario
      } else{
        this.isLoggedIn=false;
      }
    })
  }

  logout(){
    this.logginService.logout();
    this.isLoggedIn=false;
    this.router.navigate(['/login']);
  }

}
