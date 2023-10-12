import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisaoFonteRendaComponent } from './visao-fonte-renda.component';

describe('VisaoFonteRendaComponent', () => {
  let component: VisaoFonteRendaComponent;
  let fixture: ComponentFixture<VisaoFonteRendaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VisaoFonteRendaComponent]
    });
    fixture = TestBed.createComponent(VisaoFonteRendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
