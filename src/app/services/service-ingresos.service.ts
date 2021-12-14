import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DatoContable } from '../models/dato-contable';

@Injectable({
  providedIn: 'root'
})
export class ServiceIngresosService {
  url= 'http://localhost:4000/api/';

  constructor(private http: HttpClient) { }

  guardarIngreso(ingreso: DatoContable): Observable<any> {
    return this.http.post(this.url +'ingresos/', ingreso);
  }

  ConsultaIngreso(consulta: DatoContable): Observable<any> {
    return this.http.post(this.url + '',consulta);
  }
}