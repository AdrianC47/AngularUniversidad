import { AngularFirestoreDocument, AngularFirestore } from '@angular/fire/compat/firestore';
import { Configuracion } from '../modelo/configuracion.model';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
@Injectable()
export class ConfiguracionServicio {
    //este servicio se conectara a la base de datos en la coleccion de servicio
    configuracionDoc: AngularFirestoreDocument<Configuracion>;
    configuracion: Observable<Configuracion>;

    //ID unico de la coleccion de configuracion
    id = '1';

    constructor(private db: AngularFirestore) {

    }

    getConfiguracion(): Observable<Configuracion> {
        this.configuracionDoc = this.db.doc<Configuracion>(`configuracion/${this.id}`);
        this.configuracion = this.configuracionDoc.valueChanges();
        return this.configuracion;
    }

    modificarConfiguracion(configuracion: Configuracion){
        this.configuracionDoc = this.db.doc<Configuracion>(`configuracion/${this.id}`);
        this.configuracionDoc.update(configuracion);
    }

}