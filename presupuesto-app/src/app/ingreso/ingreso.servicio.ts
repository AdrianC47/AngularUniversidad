import { Ingreso } from "./ingreso.model";

export class IngresoServicio {
    //nombre:tipo
    ingresos:Ingreso[]=[
        new Ingreso("Salario",2500),
        new Ingreso("Venta Coche",5000)
    ];

    eliminar(ingreso:Ingreso){
        const indice: number =this.ingresos.indexOf(ingreso);
        //el metodo splice nos sirve para eliminar
        //los parametros que usa es el indice del elemento que queremos eliminar
        //y si le pasamos el parametro de 1 estamos indicando cuantos elementos queremos remover
        this.ingresos.splice(indice,1);
    }
}