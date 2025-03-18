import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroTipoDespesaComponent } from './cadastro-tipo-despesa.component';

describe('CadastroTipoDespesaComponent', () => {
  let component: CadastroTipoDespesaComponent;
  let fixture: ComponentFixture<CadastroTipoDespesaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CadastroTipoDespesaComponent]
    });
    fixture = TestBed.createComponent(CadastroTipoDespesaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
