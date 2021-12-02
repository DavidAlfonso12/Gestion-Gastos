import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { DatoContable } from 'src/app/models/dato-contable';
import { ListdoServicios } from 'src/app/models/listadoServicios';
import { ServiceGastos } from 'src/app/services/lista-servicios.service';
import { ServiceGastosD } from 'src/app/services/service-gastos.service';


@Component({
  selector: 'app-insertar-gastos',
  templateUrl: './insertar-gastos.component.html',
  styleUrls: ['./insertar-gastos.component.css']
})
export class InsertarGastosComponent implements OnInit {
  listadoServicio:ListdoServicios[] = [];
  gastosForm: FormGroup;
  tipoGastos= ['servicio','alimentacion','otros'];
  
  constructor(private fb: FormBuilder,
              private toast: ToastrService,
              private _gastosServicio: ServiceGastos,
              private _gastoService: ServiceGastosD){
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
    this._gastosServicio.getListaServicios().subscribe(data => {
      console.log(data);
      this.listadoServicio = data;
    }, error => {
      console.log(error);  
    }) 
  }

  agregarGasto() {
    // console.log(this.gastosForm.value);

    // console.log(this.gastosForm.get('nombreGasto')?.value);

    const Gasto: DatoContable = { 
      nombre: this.gastosForm.get('nombreGasto')?.value,
      fecha: this.gastosForm.get('fecha')?.value,
      valor: this.gastosForm.get('valorGasto')?.value
    }
    console.log(Gasto);
    this._gastoService.guardarGastos(Gasto).subscribe(date =>{
      this.toast.success('El gasto fue registrado con exito!', 'Gasto registrado!');
    })
  }
} 