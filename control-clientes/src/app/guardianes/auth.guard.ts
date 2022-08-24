import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Observable } from 'rxjs';
import { map} from 'rxjs/operators';
//Con este guardian revisaremos si el usuario esta logeado
@Injectable()
export class AuthGuard implements CanActivate{
    constructor(private router:Router,
                private afAuth:AngularFireAuth){} 

    canActivate():Observable<boolean>{
        return this.afAuth.authState.pipe(
            map(auth => {
                if(!auth){//si el objeto(es decir el usuario) no se ha logeado redirigiremos al login
                    this.router.navigate(['/login'])
                    return false;//regresamos false para indicar que no se muestre la pag que esta indicando el usuario
                } else{
                    return true;// retornamos true para indicar que se muestre la pagina de inicio
                }
            })
        )
    }
}