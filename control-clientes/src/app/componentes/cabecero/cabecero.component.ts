import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cabecero',
  templateUrl: './cabecero.component.html',
  styleUrls: ['./cabecero.component.css']
})
export class CabeceroComponent implements OnInit {
  mostrarREsponsive_menu = true;
  constructor() { }

  ngOnInit(): void {
    this.mostrarREsponsive_menu = true;
  }

}
