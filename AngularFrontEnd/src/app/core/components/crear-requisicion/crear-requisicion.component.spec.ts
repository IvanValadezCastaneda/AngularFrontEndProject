import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearRequisicionComponent } from './crear-requisicion.component';

describe('CrearRequisicionComponent', () => {
  let component: CrearRequisicionComponent;
  let fixture: ComponentFixture<CrearRequisicionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearRequisicionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrearRequisicionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
