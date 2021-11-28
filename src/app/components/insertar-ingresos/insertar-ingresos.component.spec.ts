import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertarIngresosComponent } from './insertar-ingresos.component';

describe('InsertarIngresosComponent', () => {
  let component: InsertarIngresosComponent;
  let fixture: ComponentFixture<InsertarIngresosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsertarIngresosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertarIngresosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
