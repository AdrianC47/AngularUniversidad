import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/modelo/cliente.model';
import { ClienteServicio } from 'src/app/servicios/cliente.service';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { FlashMessagesService } from 'angular2-flash-messages';
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
        cssClass: 'alert-danger', timeout: 4000
      });
    }
    else{
      //Agregar el nuevo cliente
      
    }
  }


 


}