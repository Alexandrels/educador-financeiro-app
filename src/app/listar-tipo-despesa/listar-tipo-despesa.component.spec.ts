import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarTipoDespesaComponent } from './listar-tipo-despesa.component';

describe('ListarTipoDespesaComponent', () => {
  let component: ListarTipoDespesaComponent;
  let fixture: ComponentFixture<ListarTipoDespesaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListarTipoDespesaComponent]
    });
    fixture = TestBed.createComponent(ListarTipoDespesaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
