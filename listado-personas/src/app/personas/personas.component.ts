import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoggingService } from '../LoggingService.service';
import { Persona } from '../persona.model';
import { PersonasService } from '../personas.service';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css']
})
export class PersonasComponent implements OnInit {

  personas: Persona[] = [];

  constructor(private loggingService: LoggingService, private personasService: PersonasService,
    private router: Router) { }

  ngOnInit(): void {
    //this.personas = this.personasService.personas;//igualamos el arreglo del atributo vacio con el del servicio
    this.personasService.obtenerPersonas()
      .subscribe(
        (personas: Persona[]) => {
          this.personas = personas;
          this.personasService.setPersonas(personas);
        }
      );
  }

  agregar() {
    //para navegar a otro componente usamos la clase router, la cual es un servicio
    this.router.navigate(["personas/agregar"])
  }
}
