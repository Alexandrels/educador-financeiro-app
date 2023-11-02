import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalUsuariosComponent } from './total-usuarios.component';

describe('TotalUsuariosComponent', () => {
  let component: TotalUsuariosComponent;
  let fixture: ComponentFixture<TotalUsuariosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TotalUsuariosComponent]
    });
    fixture = TestBed.createComponent(TotalUsuariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
