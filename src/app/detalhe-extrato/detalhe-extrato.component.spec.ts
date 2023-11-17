import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalheExtratoComponent } from './detalhe-extrato.component';

describe('DetalheExtratoComponent', () => {
  let component: DetalheExtratoComponent;
  let fixture: ComponentFixture<DetalheExtratoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetalheExtratoComponent]
    });
    fixture = TestBed.createComponent(DetalheExtratoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
