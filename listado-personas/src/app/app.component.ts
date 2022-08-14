import { Component, OnInit } from '@angular/core';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  titulo = 'Listado de Personas';
  // personas:Persona[]=[new Persona("Adrian","Cabrera"), new Persona("Fernando", "Herrera"), new Persona("Vladimir", "Robles")];
  // personas: Persona[] = [];

  // constructor(private loggingService: LoggingService,private personasService: PersonasService){}
  constructor(){}

  ngOnInit(): void {
    // this.personas = this.personasService.personas;//igualamos el arreglo del atrbituo vacion con el del servicio
    //Configuraremos como se accedera a la BD de Firebase
    //Utilizaremos el objeto de firebase instalando su paquete y luego importandolo
    firebase.initializeApp({
      apiKey: "AIzaSyBDZ-Ar9SKkR6pc7jC8u6Hm2PVhFkbvEXc",
      authDomain: "listado-personas-e29d2.firebaseapp.com",
    })
  }

 

}

