import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualizarFontesRendaComponent } from './visualizar-fontes-renda.component';

describe('VisualizarFontesRendaComponent', () => {
  let component: VisualizarFontesRendaComponent;
  let fixture: ComponentFixture<VisualizarFontesRendaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VisualizarFontesRendaComponent]
    });
    fixture = TestBed.createComponent(VisualizarFontesRendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
