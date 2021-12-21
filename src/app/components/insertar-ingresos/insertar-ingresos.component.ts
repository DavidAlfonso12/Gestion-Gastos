import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { DatoContable } from 'src/app/models/dato-contable';
import { ServiceIngresosService } from 'src/app/services/service-ingresos.service';

@Component({
  selector: 'app-insertar-ingresos',
  templateUrl: './insertar-ingresos.component.html',
  styleUrls: ['./insertar-ingresos.component.css']
})
export class InsertarIngresosComponent implements OnInit {
  ingresosForm: FormGroup;
  tipoIngresos= ['Sueldo','Ingreso extra']
  
  fecha1 = new Date();
  constructor(private fb: FormBuilder,
              private _ingresoService: ServiceIngresosService,
              private toast: ToastrService){
    this.ingresosForm = this.fb.group({
      tipoIngreso: ['Sueldo',Validators.required],
      nombreIngreso: ['',Validators.required],
      fecha: ['fecha1',Validators.required],
      valorIngreso: ['',Validators.required]
    })
    console.log(this.fecha1)
  }
  ngOnInit(): void {
  }

  agregarIngreso() {
    let nombreIngreso = '';  
    if (this.ingresosForm.get('tipoIngreso')?.value == this.tipoIngresos[0]) {
        nombreIngreso = this.ingresosForm.get('tipoIngreso')?.value
      } else {
        nombreIngreso = this.ingresosForm.get('nombreIngreso')?.value
      }
      
    const ingresoC: DatoContable = {
      nombre: nombreIngreso,
      fecha: this.ingresosForm.get('fecha')?.value,
      valor: this.ingresosForm.get('valorIngreso')?.value
    }
    console.log(ingresoC);
    this._ingresoService.guardarIngreso(ingresoC).subscribe(date =>{
      this.toast.success('El ingreso fue registrado con exito!', 'Ingreso registrado!');
    })
    this.ingresosForm.reset();
  }
}
