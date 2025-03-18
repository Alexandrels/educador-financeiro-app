import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalheTipoDespesaComponent } from './detalhe-tipo-despesa.component';

describe('DetalheTipoDespesaComponent', () => {
  let component: DetalheTipoDespesaComponent;
  let fixture: ComponentFixture<DetalheTipoDespesaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetalheTipoDespesaComponent]
    });
    fixture = TestBed.createComponent(DetalheTipoDespesaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
