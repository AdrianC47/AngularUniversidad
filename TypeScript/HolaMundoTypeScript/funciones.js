"use strict";
//En typescript se usa let para declarar variables a fin de especificar el tipo de dato sin embargo no es necesario
//porque usa inferencia de tipos, ademas tambien se puede usar var
let saludo = "Hola amigo desde Typescript";
//no puede cambiar los tipos de datos una vez inicializados 
//saludo=10
saludo = "cambio";
let numero;
numero = 10;
let cualquiera;
cualquiera = "cadena";
cualquiera = 22;
const PI = 3.14; //CONSTANTES, ES BUENA PRACTICA A LAS CONSTANTES PONERLAS EN MAYUSCULAS Y SEPARADAS POR _
//PI=25 NO SE PUEDEN MODIFICAR SU VALOR UNA VEZ INICIALIZADO
function saludar() {
    console.log(saludo);
    console.log(numero);
    console.log(PI);
}
saludar();
