"use strict";
class Persona {
    constructor(nombre) {
        this.nombre = nombre;
    }
    getNombre() {
        return this.nombre;
    }
    static metodoEstatico() {
        return 100;
    }
}
let persona1 = new Persona("Mike");
console.log(persona1.getNombre());
console.log(Persona.metodoEstatico());
