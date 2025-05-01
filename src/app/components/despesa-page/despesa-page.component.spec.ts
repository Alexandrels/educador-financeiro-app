import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DespesaPageComponent } from './despesa-page.component';

describe('DespesaPageComponent', () => {
  let component: DespesaPageComponent;
  let fixture: ComponentFixture<DespesaPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DespesaPageComponent]
    });
    fixture = TestBed.createComponent(DespesaPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
