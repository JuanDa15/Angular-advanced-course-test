import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DoctorServiceService {

  constructor(
    private _http: HttpClient
  ) { }


  getDoctors() {
    return this._http.get('');
  }
}
