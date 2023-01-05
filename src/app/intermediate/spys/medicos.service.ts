import { Injectable } from '@angular/core';
import { of } from 'rxjs';
// import { Http } from '@angular/http';
// import 'rxjs/add/operator/map';

@Injectable()
export class MedicosService {

  // constructor( public http: Http ) { }

  getMedicos() {
    return of([]);
    // return this.http.get('...')
                // .map( resp => resp['medicos'] );
  }

  agregarMedico( medico: any ) {
    return of([]);
    // return this.http.post('...', medico )
    //             .map( resp => resp['medico'] );
  }

  borrarMedico( id: string ) {
    return of([]);
    // return this.http.delete('...' )
    //             .map( resp => resp['medico'] );
  }


}
