import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceGastos {
  url= 'http://localhost:4000/api/servicios/';

  constructor(private http: HttpClient) { }

  getListaServicios(): Observable<any> {
    return this.http.get(this.url);
  }
}