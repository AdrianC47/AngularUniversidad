let suma= function( a: number, b:number){
    return a+b;
};

console.log(suma(8,5));

let sumaFlecha = (a:number,b:number) => a+b;
// let sumaFlecha = (a:number,b:number) => {
//     return a+b;
// };

console.log(sumaFlecha(8,8));

//la unica diferencia es que primero se ponen los argumentos, luego el simbolo de la fecha
// luego el cuerpo del método, si el cuerpo del método tiene una sola línea pues se pueden omitir los {} y el return

 var obtenerNombre = function(){
    return "Juan Perez"
 }

 let obtenerNombreFlecha= ()=> "Juan Perez";

 console.log(obtenerNombreFlecha())