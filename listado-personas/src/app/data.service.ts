import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Persona } from './persona.model';
import { LoginService } from './login/login.service';
@Injectable()
export class DataServices {
    //Este servicio se encargará de establecer la comunicación con la base de datos 
    //pero lo hará a partir de la inyección de otro servicio el cual es el  httpClient
    constructor(private httpClient: HttpClient, private loginService: LoginService) { }

    //Cargar Personas
    cargarPersonas(): Observable<any> {
        const token =  this.loginService.getIdToken();
        return this.httpClient.get('https://listado-personas-e29d2-default-rtdb.firebaseio.com/datos.json?auth='+token)
    }
    //Guardar personas
    guardarPersonas(personas: Persona[]) {//con el metodo put lo que hago es reemplazar los datos para que no se guarden cada vez los mismos por cada peticion POST
        this.httpClient.put('https://listado-personas-e29d2-default-rtdb.firebaseio.com/datos.json', personas)
            .subscribe(
                response => console.log("resultado guardar Personas" + response),
                error => console.log("Error al guardar Personas:" + error)
            );
    }

    modificarPersona(index: number, persona: Persona) {
        let url: string;
        url = 'https://listado-personas-e29d2-default-rtdb.firebaseio.com/datos/' + index + '.json';
        this.httpClient.put(url, persona)
            .subscribe(
                response => console.log("resultado de modificar el objeto persona " + response)
                , error => console.log("Error  en modificar Persona: " + error)
            )
    }

    eliminarPersona(index: number) {
        let url: string;
        url = 'https://listado-personas-e29d2-default-rtdb.firebaseio.com/datos/' + index + '.json';
        this.httpClient.delete(url)
            .subscribe(
                response => console.log("resultado de eliminar el objeto persona " + response)
                , error => console.log("Error  en eliminar Persona: " + error)
            )
    }
}