import { Egreso } from "./egreso.model";

export class EgresoServicio {
  egresos: Egreso[] = [
    new Egreso("Celular Nuevo", 900),
    new Egreso("Ropa", 435.28)
  ];

  eliminar(egreso: Egreso) {
    const indice: number = this.egresos.indexOf(egreso)
    //el metodo splice nos sirve para eliminar
    //los parametros que usa es el indice del elemento que queremos eliminar
    //y si le pasamos el parametro de 1 estamos indicando cuantos elementos queremos remover
    this.egresos.splice(indice,1);
  }

}