import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { LoginService } from '../../servicios/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: string;
  password: string;

  constructor(private  router:Router, private flashMessages: FlashMessagesService, private loginService: LoginService) { }

  ngOnInit(): void {
    if(this.loginService.getAuth().subscribe(auth=>{
      if(auth){ // al iniciar el componente login preguntamos si el objeto auth existe y en caso de existir significaria que esta logeado, entonces se debe redireccionar  
        this.router.navigate(['/']) //a la pag de  Inicio ya que el usuario ya esta logeado
      }
    })){

    }
  }
  
  login(){
    this.loginService.login(this.email, this.password)
      .then( res => {
        this.router.navigate(['/']);
      })
      .catch(error =>{
        this.flashMessages.show(error.message, {
          cssClass: 'alert-danger', timeout: 4000
        });
      });
  }
}
