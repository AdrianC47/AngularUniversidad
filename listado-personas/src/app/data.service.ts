import  {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Persona } from './persona.model';
@Injectable()
export class DataServices{
 //Este servicio se encargará de establecer la comunicación con la base de datos 
 //pero lo hará a partir de la inyección de otro servicio el cual es el  httpClient
 constructor(private httpClient: HttpClient){}
 
    //Guardar personas
    guardarPersonas(personas: Persona[]){//con el metodo put lo que hago es reemplazar los datos para que no se guarden cada vez los mismos por cada peticion POST
        this.httpClient.put('https://listado-personas-e29d2-default-rtdb.firebaseio.com/datos.json',personas)
        .subscribe(
            response => console.log("resultado guardar Personas" + response),
            error => console.log("Error al guardar Personas:" +error)
        );    
    }   
}