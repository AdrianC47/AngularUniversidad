export class Persona{ //se usa el export para poder exportar/usar la clase en otro lado
    nombre:string;
    apellido:string;

    constructor(nombre:string,apellido:string){
        this.nombre=nombre;
        this.apellido=apellido;
    }
}