import { Injectable } from "@angular/core";
import { Route, Router } from "@angular/router";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth'
 
@Injectable()
export class LoginService{
    token: string|null;

    constructor(private router: Router){}
    //En este metodo procesamos el email y el password  para posteriormente obtner un Token y finalmente redireccionarse a la pag de inicio
    login(email: string, password: string) {
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(
                response => {
                    console.log(response);
                    firebase.auth().currentUser?.getIdToken().then(
                        token => {
                            this.token = token;
                            console.log("token obtenido:" + this.token);
                            this.router.navigate(['/']);
                        }
                    )
                   
                }
            )
    }

    getIdToken(){
        return this.token;
    }

    isAutenticado(){//este metodo se lo realiza para que en la vista del app salga los botones de login o salir dependiendo de si ya inicio sesion o no
        return this.token !=null; //regresa true si esta logrado y false si no
    }

    logout(){
        firebase.auth().signOut().then( () => {
            this.token = null;
            this.router.navigate(['login']);
        }).catch(error => console.log("error logout: "+ error));
    }
}