import { Component, OnInit } from '@angular/core';
import { Persona } from '../../persona.model';
import { LoggingService } from '../../LoggingService.service';
import { PersonasService } from '../../personas.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
  //providers: [LoggingService] //se añade un proveedor para poder usar un servicio
})
export class FormularioComponent implements OnInit {

  // @Output() personaCreada = new EventEmitter<Persona>(); //con esto  crearemos un evento que propagará el objeto Persona al componente padre app
  nombreInput: string = '';
  apellidoInput: string = '';
  index: number;
  modoEdicion:number;
  //@ViewChild('nombreInput')nombreInputa: ElementRef; //el primero es nombre de la referencia local(en el html) y el segundo es el nombre del atributo
  //@ViewChild('apellidoInput')apellidoInputa: ElementRef;

  constructor(private loggingService: LoggingService, private personasService: PersonasService,
    private router: Router, private route: ActivatedRoute) {//Concepto de inyeccion de dependencias a través del constructor
    //Lo siguiente se lo hace con el fin de demostrar como me comunico por diferentes componentes por medio de un servicio
    //en este caso seria entre el formulario componente y el persona componente
    this.personasService.saludar.subscribe((parametroindice: number) => alert("El indice es: " + parametroindice));
    //Subscribe() es un método en Angular que conecta el observer con eventos observable. 
    //Siempre que se realiza algún cambio en estos observables, se ejecuta un código y observa los resultados o cambios mediante el método subscribe. 
    //aqui nos suscribimos al servicio, en pocas palabras estamos escuchando si hay un  evento que se emite y alertando por cada vez que se pase
  }


  ngOnInit() {
    //El Activated Route es para obtener los parametros mandados
    this.index = this.route.snapshot.params['id'];//el nombre id es y debe ser el mismo que se define en las url
    this.modoEdicion= +this.route.snapshot.queryParams['modoEdicion']; //el + antes es para convertir a entero el parametro en string
    if (this.modoEdicion!=null && this.modoEdicion === 1) {
      let persona: Persona = this.personasService.encontrarPersona(this.index);
      this.nombreInput = persona.nombre;
      this.apellidoInput = persona.apellido;
    }
  }

  // agregarPersona(nombreInput: HTMLInputElement,apellidoInput:HTMLInputElement){ esto es en el locale reference
  // agregarPersona() {
  //   let persona1 = new Persona(this.nombreInput, this.apellidoInput); // Esto es propio del view child (el native element)
  //   //this.loggingService.enviarMensajeAConsola('Enviamos persona con nombre: ' +persona1.nombre+" apellido:" +persona1.apellido);//llamo al método de mi servicio
  //   //this.personaCreada.emit(persona1)//con el emit lo propagamos al padre
  //   this.personasService.agregarPersona(persona1);
  // }

  onGuardarPersona() {
    let persona1 = new Persona(this.nombreInput, this.apellidoInput);
    if(this.modoEdicion!= null && this.modoEdicion ===1){
      //actualizar  
      this.personasService.modificarPersona(this.index,persona1);
    }else{
     //crear
     this.personasService.agregarPersona(persona1);
    }

    //Una vez agregada una persona se redirecciona al listado de personas
    this.router.navigate(['personas']);
  }

  eliminarPersona(){
    if(this.index!=null){
      this.personasService.eliminarPersona(this.index);
    }
    this.router.navigate(['personas']);
  }


}
