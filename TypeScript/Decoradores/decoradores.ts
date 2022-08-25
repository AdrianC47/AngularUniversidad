// Nos permite agregar funcionalidad sin modificar nuestra clase a la cual queremos decorar
// Se usa el @
// Se puede aplicar a clases, métodos y atributos o propiedades de nuestra clase

function Saludar(target: Function):void{//target es lo que queremos que se ejecute
    target.prototype.saludos = function():void{//prototype modifica al objeto en tiempo de ejecución
        console.log("Hola desde decoradores")
    }    
}

@Saludar
class Hola{
    constructor(){}
}

let hola1= new Hola();
hola1.saludos();