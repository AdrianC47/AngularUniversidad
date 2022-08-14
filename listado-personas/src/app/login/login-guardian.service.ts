import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";
import { LoginService } from './login.service';

@Injectable()
export class LoginGuardian implements CanActivate{ //para poder utilizar un guardian y definirlo correctamente implementamos la interface CanActivate
    
    constructor(private loginService: LoginService, private router: Router){}

    //Este metodo servira para indicar si una pagina se muestra o no
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
        if(this.loginService.isAutenticado()){
             return true;
        }
        else {
            this.router.navigate(['login']);
            return false;
        }
    }
}