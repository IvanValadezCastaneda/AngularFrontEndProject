import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequisicionesComponent } from './requisiciones.component';

describe('RequisicionesComponent', () => {
  let component: RequisicionesComponent;
  let fixture: ComponentFixture<RequisicionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequisicionesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RequisicionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
