import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DatoContable } from 'src/app/models/dato-contable';
import { ConsultaMes } from 'src/app/services/service-consulta.mes.service';

@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.css']
})
export class ConsultaComponent implements OnInit {
  consultaForm: FormGroup;
  consultaGastos: DatoContable[] = [];
  consultaIngresos: DatoContable[] = [];
  totalGastos = 0;
  totalIngresos = 0;

  constructor(private fb: FormBuilder,
              private _consultaGasto: ConsultaMes) { 
    this.consultaForm = this.fb.group({
      fecha:['',Validators.required]
    })
  }

  ngOnInit(): void {  
  }

  agregarFecha(){
    const Consulta = {
      fecha: this.consultaForm.get('fecha')?.value,
    }
    this._consultaGasto.ConsultaServicio(Consulta).subscribe(date =>{
      this.consultaGastos = date.Gastos; 
      this.consultaIngresos = date.ingresos; 
      this.totalGastos = this.sumarTotales(this.consultaGastos);
      this.totalIngresos = this.sumarTotales(this.consultaIngresos);
    // console.log(date);
    // for (let i = 0; i < this.consultaGastos.length; i++){
    //   let gasto = 0
    //   gasto = gasto + this.consultaGastos[i].valor;
    //   console.log(gasto);
    // }
    })
  }

  sumarTotales( lista: DatoContable[]){
    let total =0;
    lista.forEach(element => {
      total = total+ element.valor
    });
    return total
  }
}
