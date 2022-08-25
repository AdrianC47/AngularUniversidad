//Los modulos lo que nos permiten es agrupar todo dentro de modulo 
//NombreModulo { tus funciones y clases }. Para que las funciones y clases de los 
//módulos puedan ser utilizadas desde fuera, deben de incluir la palabra export.
import { Persona } from "./persona";

let persona1 = new Persona("Luis","Cabrera");
console.log(persona1);
console.log(persona1.nombre+ " "+persona1.apellido);