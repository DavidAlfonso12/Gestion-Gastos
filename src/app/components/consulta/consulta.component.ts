import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ConsultaMes } from 'src/app/services/service-consulta.mes.service';

@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.css']
})
export class ConsultaComponent implements OnInit {
  consultaForm: FormGroup;
  
  constructor(private fb: FormBuilder,
              private _consultaGasto: ConsultaMes) { 
    this.consultaForm = this.fb.group({
      fecha:['',Validators.required]
    })
  }

  ngOnInit(): void {  
  }

  consultar(){
    const Consulta = {
      fecha: this.consultaForm.get('fecha')?.value,
    }
    this._consultaGasto.ConsultaServicio(Consulta).subscribe(date =>{
    console.log(Consulta);
    })
  }
  agregarFecha(){
    console.log(this.consultaForm);}
}
