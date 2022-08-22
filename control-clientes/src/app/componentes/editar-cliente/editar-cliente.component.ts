import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/modelo/cliente.model';
import { ClienteServicio } from 'src/app/servicios/cliente.service';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-editar-cliente',
  templateUrl: './editar-cliente.component.html',
  styleUrls: ['./editar-cliente.component.css']
})
export class EditarClienteComponent implements OnInit {
  id: string;
  cliente: Cliente = {
    nombre: "",
    apellido: '',
    email: '',
    saldo: 0
  }

  constructor(private clientesServicio: ClienteServicio, private modalService: NgbModal,
    private flashMessages: FlashMessagesService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.id= this.route.snapshot.params['id'];
    this.clientesServicio.getCliente(this.id).subscribe( cliente => {
      this.cliente = cliente;
    });

  }

  guardar({value,valid}: {value:Cliente, valid: boolean}){
    if(!valid){
      this.flashMessages.show('Por favor llenar el formulario correctamente',{
        cssClass: 'alert-danger', timeout:4000
      });
    }
    else {
      value.id=this.id;
      //modificar el cliente
      this.clientesServicio.modificarCliente(value);
      this.router.navigate(['/']);
    }
  }

  eliminar(){
    if(confirm('¿Seguro que desea eliminar el cliente?')){
      this.clientesServicio.eliminarCliente(this.cliente)
      this.router.navigate(['/'])
    }

  }

}
