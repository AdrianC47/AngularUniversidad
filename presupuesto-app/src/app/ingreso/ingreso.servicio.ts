import { Ingreso } from "./ingreso.model";

export class IngresoServicio {
    //nombre:tipo
    ingresos:Ingreso[]=[
        new Ingreso("Salario",4000),
        new Ingreso("Venta Coche",5000)
    ];
}