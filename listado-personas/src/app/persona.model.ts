//Esto es una clase de modelo
// export class Persona{
//     //este codigo es la forma tradicional o larga
//     nombre:string ='';
//     apellido:string = '';
    
//     constructor(nombre:string,apellido:string){
//         this.nombre=nombre;
//         this.apellido=apellido;
//     }
// }
export class Persona{
    //este codigo es la forma simplificada donde en el mismo constructor se crean y declaran los atributos
    constructor(public nombre:string, public apellido:string){}//se pone el public para que se cree y declare  el atributo como atributo de la clase
    

}

