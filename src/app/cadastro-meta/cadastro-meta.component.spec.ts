import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroMetaComponent } from './cadastro-meta.component';

describe('CadastroMetaComponent', () => {
  let component: CadastroMetaComponent;
  let fixture: ComponentFixture<CadastroMetaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CadastroMetaComponent]
    });
    fixture = TestBed.createComponent(CadastroMetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
