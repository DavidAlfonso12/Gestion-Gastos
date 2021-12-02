import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms'; 
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

// componentes
import { InsertarIngresosComponent } from './components/insertar-ingresos/insertar-ingresos.component';
import { InsertarGastosComponent } from './components/insertar-gastos/insertar-gastos.component';
import { MenuComponent } from './components/menu/menu.component';
import { ConsultaComponent } from './components/consulta/consulta.component';


@NgModule({
  declarations: [
    AppComponent,
    InsertarIngresosComponent,
    InsertarGastosComponent,
    MenuComponent,
    ConsultaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
