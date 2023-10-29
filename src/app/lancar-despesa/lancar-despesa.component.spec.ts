import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LancarDespesaComponent } from './lancar-despesa.component';

describe('LancarDespesaComponent', () => {
  let component: LancarDespesaComponent;
  let fixture: ComponentFixture<LancarDespesaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LancarDespesaComponent]
    });
    fixture = TestBed.createComponent(LancarDespesaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
