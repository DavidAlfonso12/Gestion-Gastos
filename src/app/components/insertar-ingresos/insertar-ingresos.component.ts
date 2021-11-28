import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-insertar-ingresos',
  templateUrl: './insertar-ingresos.component.html',
  styleUrls: ['./insertar-ingresos.component.css']
})
export class InsertarIngresosComponent implements OnInit {

  mostrar: Boolean = false;
  mensaje: String = 'Hola manco';
  mensaje_enlace: String = 'Mostrar';
  seleccion = 5;

  mostrarOcultar (){
   this.mostrar = !this.mostrar;
   console.log(this.seleccion);
   
  }
  constructor() { }

  ngOnInit(): void {
  }

}
