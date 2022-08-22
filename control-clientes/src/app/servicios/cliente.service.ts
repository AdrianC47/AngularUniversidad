import { Injectable } from "@angular/core";
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from "@angular/fire/compat/firestore";
import { Cliente } from "../modelo/cliente.model";
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators'

@Injectable()
export class ClienteServicio{
    clientesColeccion: AngularFirestoreCollection<Cliente>; //definimos un tipo para la coleccion que en este caso es Cliente
    clienteDoc: AngularFirestoreDocument<Cliente>;
    //Los metodos nos retornaran de la misma forma coleciones pero de tipo Observable por ende tendremos que subscribirnos a las colecciones
    clientes: Observable<Cliente[]>;
    cliente: Observable<Cliente>;

    constructor(private db:AngularFirestore){
        this.clientesColeccion=db.collection('clientes', ref=> ref.orderBy('nombre', 'asc'));//recuperamos de nuestra bd de firestore la coleccion de clientes, ademas indicamos el orden
    }

    getClientes(): Observable<Cliente[]>{
        //Obtenemos los clientes
        this.clientes = this.clientesColeccion.snapshotChanges().pipe( //aqui obtengo mi coleccion de clientes, con el pipe itero la misma     
            map(cambios=> {
                return cambios.map(accion => {
                    const datos= accion.payload.doc.data() as Cliente;
                    datos.id = accion.payload.doc.id;
                    return datos; 
                })
            }));
            return this.clientes;
    }

    agregarCliente(cliente: Cliente){
        this.clientesColeccion.add(cliente);
    }

    getCliente(id:string){
        this.clienteDoc =this.db.doc<Cliente>(`clientes/${id}`);
        this.cliente=this.clienteDoc.snapshotChanges().pipe(
            map( accion=> {
                if(accion.payload.exists === false){
                    return null;
                }
                else{
                    const datos= accion.payload.data() as Cliente;
                    datos.id= accion.payload.id;
                    return datos;
                }
            })
        );
        return this.cliente;
    }

    modificarCliente(cliente: Cliente){
        this.clienteDoc = this.db.doc(`clientes/${cliente.id}`);
        this.clienteDoc.update(cliente);
    }

    eliminarCliente(cliente:Cliente){
        this.clienteDoc = this.db.doc(`clientes/${cliente.id}`);
        this.clienteDoc.delete();
    }

}