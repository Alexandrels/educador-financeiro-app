import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroFonteRendaDetalheComponent } from './cadastro-fonte-renda-detalhe.component';

describe('CadastroFonteRendaDetalheComponent', () => {
  let component: CadastroFonteRendaDetalheComponent;
  let fixture: ComponentFixture<CadastroFonteRendaDetalheComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CadastroFonteRendaDetalheComponent]
    });
    fixture = TestBed.createComponent(CadastroFonteRendaDetalheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
