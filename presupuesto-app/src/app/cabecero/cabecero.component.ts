import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cabecero',
  templateUrl: './cabecero.component.html',
  styleUrls: ['./cabecero.component.css']
})
export class CabeceroComponent implements OnInit {
  //Esta clase sera la hija que heredera del componente padre app
  //Recordar que para que pueda recibir info desde app se debe usar la notacion de input
  @Input() presupuestoTotal: number;
  @Input() ingresoTotal: number;
  @Input() egresoTotal: number;
  @Input() porcentajeTotal: number;
  constructor() { }

  ngOnInit(): void {
  }

}