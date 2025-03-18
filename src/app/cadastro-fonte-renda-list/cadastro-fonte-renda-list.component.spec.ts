import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroFonteRendaListComponent } from './cadastro-fonte-renda-list.component';

describe('CadastroFonteRendaListComponent', () => {
  let component: CadastroFonteRendaListComponent;
  let fixture: ComponentFixture<CadastroFonteRendaListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CadastroFonteRendaListComponent]
    });
    fixture = TestBed.createComponent(CadastroFonteRendaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
