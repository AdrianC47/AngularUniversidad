import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { ConfiguracionServicio } from '../servicios/configuracion.service';
import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { map } from 'rxjs/operators';
@Injectable()
export class ConfiguracionGuard implements CanActivate {
    constructor(private router: Router,
                private configuracionServicio: ConfiguracionServicio) { }

    canActivate(): Observable<boolean> {
        return this.configuracionServicio.getConfiguracion().pipe(
            map(configuracion => {
                if (configuracion.permitirRegistro) {//preguntamos si el booleano es verdadero
                    return true;//es decir si nos deja ver la pagina o no
                } else {
                    this.router.navigate(['/login']);
                    return false;
                }
            })
        );
    }
}