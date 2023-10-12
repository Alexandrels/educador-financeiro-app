import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroFonteRendaComponent } from './cadastro-fonte-renda.component';

describe('CadastroFonteRendaComponent', () => {
  let component: CadastroFonteRendaComponent;
  let fixture: ComponentFixture<CadastroFonteRendaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CadastroFonteRendaComponent]
    });
    fixture = TestBed.createComponent(CadastroFonteRendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
