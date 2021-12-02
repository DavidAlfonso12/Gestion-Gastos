import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DatoContable } from '../models/dato-contable';

@Injectable({
  providedIn: 'root'
})
export class ServiceGastosD {
  url= 'http://localhost:4000/api/gastos/';

  constructor(private http: HttpClient) { }

  guardarGastos(gasto: DatoContable): Observable<any> {
    return this.http.post(this.url, gasto);
  }
}
