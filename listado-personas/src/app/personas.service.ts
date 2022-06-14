import { Persona } from "./persona.model";

export class PersonasService {
    personas: Persona[] = [new Persona("Adrian", "Cabrera"),
    new Persona("Fernando", "Herrera"),
    new Persona("Vladimir", "Robles")];

    agregarPersona(persona: Persona) {
        this.personas.push(persona);
    }

}