import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InsertarIngresosComponent } from './components/insertar-ingresos/insertar-ingresos.component';
import { InsertarGastosComponent } from './components/insertar-gastos/insertar-gastos.component';
import { ConsultaComponent } from './components/consulta/consulta.component';

const routes: Routes = [
  {path: 'gastos', component: InsertarGastosComponent},
  {path: 'ingresos', component: InsertarIngresosComponent},
  {path: 'consulta', component: ConsultaComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
