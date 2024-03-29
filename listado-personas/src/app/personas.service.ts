import { Persona } from "./persona.model";
import { LoggingService } from './LoggingService.service';
import { Injectable, EventEmitter } from '@angular/core';
import { DataServices } from './data.service';

@Injectable() //esta anotacion se usa para indicar que voy a inyectar un servicio dentro de otro
export class PersonasService {
    personas: Persona[] = [];
    // personas: Persona[] = [
    //     new Persona("Adrian", "Cabrera"),
    //     new Persona("Fernando", "Herrera"),
    //     new Persona("Vladimir", "Robles")
    // ];
    //esto es un atrbito
    saludar = new EventEmitter<number>();//definimos una variable que va a ser el event emitter y lo que va a emitir es un number

    constructor(private ServicioLogin: LoggingService, private dataService :DataServices) { }


    setPersonas(personas: Persona[]){
        this.personas=personas;
    }
    obtenerPersonas(){
        return this.dataService.cargarPersonas();
    }
    agregarPersona(persona: Persona) {
        this.ServicioLogin.enviarMensajeAConsola("Agregamos persona " + persona.nombre);
        if (this.personas == null ){
            this.personas = [];
        }
        this.personas.push(persona);
        this.dataService.guardarPersonas(this.personas);
    }

    encontrarPersona(index: number) {
        let persona: Persona = this.personas[index];
        return persona;

    }
    
    modificarPersona(index:number, persona:Persona){
        //busco a la persona en este caso por el index y luego la reemplazo con el objeto que recibo
        let persona1:Persona=this.personas[index];
        persona1.nombre=persona.nombre;
        persona1.apellido=persona.apellido;
        this.dataService.modificarPersona(index,persona)
        
    }

    eliminarPersona(index:number){
        this.personas.splice(index,1)    //el splice es para borrar
        this.dataService.eliminarPersona(index)
        // se vuelve a guardar el arreglo para regenerar los indices ya que en este caso el modelado no se esta trabajando con
        // identificadores unicos
        this.modificarPersonas();
    }    

    modificarPersonas(){
        if(this.personas != null){
            this.dataService.guardarPersonas(this.personas)
        }
    }
}