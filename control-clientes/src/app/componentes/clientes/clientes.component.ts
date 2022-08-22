import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Cliente } from 'src/app/modelo/cliente.model';
import { ClienteServicio } from 'src/app/servicios/cliente.service';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { FlashMessagesService } from 'angular2-flash-messages';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {
  closeModal: string;
  clientes: Cliente[];
  cliente: Cliente={
    nombre:"",
    apellido:'',
    email:'',
    saldo:0
  }

  @ViewChild("clienteForm") clienteForm: NgForm; //por medio de ViewChild lo que haremos es reiniciar/limpiar nuestro formulario

  @ViewChild("botonCerrar") botonCerrar: ElementRef; //de igual forma por medio de ViewChild lo que haremos es que se cierre el modal una vez se haya guardado el cliente

    constructor(private clientesServicio: ClienteServicio,private modalService: NgbModal, private flashMessages: FlashMessagesService) { }

  ngOnInit(): void {  
    this.clientesServicio.getClientes().subscribe(
      clientes => {
        this.clientes = clientes;
      }
    )
  }
  triggerModal(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((res) => {
      this.closeModal = `Closed with: ${res}`;
    }, (res) => {
      this.closeModal = `Dismissed ${this.getDismissReason(res)}`;
    });
  }
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

  getSaldoTotal() {
    let saldoTotal: number = 0;
    if (this.clientes) {
      this.clientes.forEach(cliente => {
         
        saldoTotal += cliente.saldo!;
 
      })
    }
    return saldoTotal;
  }
  agregar({value, valid}: {value:Cliente, valid:boolean}){
    if(!valid){
      this.flashMessages.show("Por favor llena el formulario correctamente", {
        cssClass: 'alert-dangersaldo', timeout: 4000
      });
    }
    else{
      //Agregar el nuevo cliente
        this.clientesServicio.agregarCliente(value);
        var resetForm = <HTMLFormElement>document.getElementById('#formulario');
        resetForm.reset();
         this.cerrarModal();

    }
  }

  private cerrarModal(){
    var boton =<HTMLFormElement>document.getElementById('#botonCerrar');
    boton.click();
     
  }


 


}