import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-insertar-ingresos',
  templateUrl: './insertar-ingresos.component.html',
  styleUrls: ['./insertar-ingresos.component.css']
})
export class InsertarIngresosComponent implements OnInit {
  ingresosForm: FormGroup;
  tipoIngresos= ['Sueldo','Ingreso extra',]
  
  fecha1= new Date();
  constructor(private fb: FormBuilder){
    this.ingresosForm = this.fb.group({
      tipoIngreso: ['Sueldo',Validators.required],
      nombreIngreso: ['',Validators.required],
      fecha: ['',Validators.required],
      valorIngreso: ['',Validators.required]
    })
    console.log(this.tipoIngresos)
  }
  ngOnInit(): void {
  }
  agregarIngreso() {
    console.log(this.ingresosForm.value)
    console.log(this.fecha1)
  }
}
