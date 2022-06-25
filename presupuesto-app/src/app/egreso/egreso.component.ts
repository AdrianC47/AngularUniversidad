import { Component, Input, OnInit } from '@angular/core';
import { Egreso } from './egreso.model';
import { EgresoServicio } from './egreso.servicio';

@Component({
  selector: 'app-egreso',
  templateUrl: './egreso.component.html',
  styleUrls: ['./egreso.component.css']
})
export class EgresoComponent implements OnInit {

  egresos: Egreso[] = [];
  @Input() ingresoTotal: number;
  //para poder sacar el porcentaje por cada valor del egreso es necesario obtener
  //el valor del ingreso total el cual esta en otro componente (app)
  //y para llamarlo se usa el @input


  constructor(private egresoServicio: EgresoServicio) { }

  ngOnInit(): void {
    this.egresos = this.egresoServicio.egresos;
  }
  eliminarEgreso(egreso: Egreso) {
    this.egresoServicio.eliminar(egreso);
  }

  //creo que un metodo para calcular el porcentaje por cada valor de egreso
  calcularPorcentaje(egreso: Egreso) {
    console.log(this.ingresoTotal +"dfs") 
    return egreso.valor / this.ingresoTotal;
  }

}