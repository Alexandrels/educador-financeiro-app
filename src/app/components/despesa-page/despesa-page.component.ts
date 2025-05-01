import { Component } from '@angular/core';
import { Despesa } from 'src/app/model/despesa';

@Component({
  selector: 'app-despesa-page',
  template: `
  <app-despesa-form [selectedExpense]="selected" />
  <app-despesa-list (editExpense)="onEdit($event)" />
`,
  styleUrls: ['./despesa-page.component.css']
})
export class DespesaPageComponent {
  selected: Despesa | null = null;

  onEdit(expense: Despesa) {
    this.selected = { ...expense };
  }
}
