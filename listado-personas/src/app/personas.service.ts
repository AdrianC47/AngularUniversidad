import { Persona } from "./persona.model";
import { LoggingService } from './LoggingService.service';
import { Injectable } from "@angular/core";

@Injectable() //esta anotacion se usa para indicar que voy a inyectar un servicio dentro de otro
export class PersonasService {
    personas: Persona[] = [new Persona("Adrian", "Cabrera"),
    new Persona("Fernando", "Herrera"),
    new Persona("Vladimir", "Robles")];

    constructor(private ServicioLogin:LoggingService){

    }
    agregarPersona(persona: Persona) {
        this.ServicioLogin.enviarMensajeAConsola("Agregamos persona " + persona.nombre);
        this.personas.push(persona);
    }

}