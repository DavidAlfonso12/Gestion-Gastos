import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-insertar-gastos',
  templateUrl: './insertar-gastos.component.html',
  styleUrls: ['./insertar-gastos.component.css']
})
export class InsertarGastosComponent implements OnInit {
  gastosForm: FormGroup;
  
  fecha2= new Date();
  constructor(private fb: FormBuilder){
    this.gastosForm = this.fb.group({
      tipoGasto: ['1',Validators.required],
      servicio: ['',Validators.required],
      nombreGasto: ['',Validators.required],
      fecha: ['',Validators.required],
      valorGasto: ['',Validators.required]
    })
  }  
  ngOnInit(): void {
  }
  agregarGasto() {
    console.log(this.gastosForm.value)
  }
}
