class Persona {
    private nombre:string;

    constructor(nombre: string) {
        this.nombre = nombre;
    }
    getNombre():string{
        return this.nombre
    }

    static metodoEstatico():number{
        return 100;
    }
}

let persona1 = new Persona("Mike");
console.log(persona1.getNombre());
console.log(Persona.metodoEstatico());    