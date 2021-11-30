import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceGastosService {
  url= 'posman';

  constructor(private http: HttpClient) { }

   getGastoCervicios(): Observable<any> {
    return this.http.get(this.url);
  }
}
