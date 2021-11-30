import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServiceGastosService } from 'src/app/services/service-gastos.service';

@Component({
  selector: 'app-insertar-gastos',
  templateUrl: './insertar-gastos.component.html',
  styleUrls: ['./insertar-gastos.component.css']
})
export class InsertarGastosComponent implements OnInit {
  gastosForm: FormGroup;
  tipoGastos= ['servicio','alimentacion','otros',]


  constructor(private fb: FormBuilder, private _gastosCervicio: ServiceGastosService ){
    this.gastosForm = this.fb.group({
      tipoGasto: ['servicio',Validators.required],
      servicio: ['',Validators.required],
      nombreGasto: ['',Validators.required],
      fecha: ['',Validators.required],
      valorGasto: ['',Validators.required]
    })   
  }
  ngOnInit(): void {
    this.obtenerListadoServicios();
  }
  obtenerListadoServicios() {
    this._gastosCervicio.getGastoCervicios().subscribe(data => {
      console.log(data);
    }, error => {
      console.log(error);
      
    });
    
  }

  agregarGasto() {
    console.log(this.gastosForm.value)
  }
} 
