import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConsultaMes {
  url= 'http://localhost:4000/api/';

  constructor(private http: HttpClient) {}

  ConsultaServicio(consultas: any): Observable<any> {
    return this.http.post(this.url,consultas);
  }
}
