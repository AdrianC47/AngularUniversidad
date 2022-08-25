//Con interface nos referimos a un contrado que debemos respetar
//Por contrato nos referimos a un tipo de dato que tiene ciertos atributos/métodos
interface Usuario {
    nombreUsuario: string;
    password: string;
    confirmarPassword?: string; //con el ? indicamos que es opcional
}

let usuario1: Usuario = { nombreUsuario: 'Adrian', password: 'Adrian' };
console.log(usuario1);
console.log(usuario1.nombreUsuario);

interface Abordar {
    abordarTransporte(): void;
}

let avion: Abordar = {
    abordarTransporte: function () {
        console.log('abordando');
    }
}
avion.abordarTransporte();