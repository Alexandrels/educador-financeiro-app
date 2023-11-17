import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SituacaoSaldoComponent } from './situacao-saldo.component';

describe('SituacaoSaldoComponent', () => {
  let component: SituacaoSaldoComponent;
  let fixture: ComponentFixture<SituacaoSaldoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SituacaoSaldoComponent]
    });
    fixture = TestBed.createComponent(SituacaoSaldoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
