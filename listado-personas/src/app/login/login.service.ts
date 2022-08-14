import { Injectable } from "@angular/core";
import { Route, Router } from "@angular/router";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth'
 
@Injectable()
export class LoginService{
    token: string;

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

}