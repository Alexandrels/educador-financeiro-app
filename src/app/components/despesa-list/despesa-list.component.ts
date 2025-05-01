import { Component, EventEmitter, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { Despesa } from 'src/app/model/despesa';
import { DespesaService } from 'src/app/service/despesa.service';

@Component({
  selector: 'app-despesa-list',
  templateUrl: './despesa-list.component.html',
  styleUrls: ['./despesa-list.component.css']
})
export class DespesaListComponent {
  despesas$: Observable<Despesa[]>;
  @Output() editExpense = new EventEmitter<Despesa>();

  constructor(private despesaService: DespesaService) {
    this.despesas$ = this.despesaService.getDespesas();
  }

  onDelete(id: string) {
    this.despesaService.delete(id);
  }

  onEdit(despesa: Despesa) {
    this.editExpense.emit(despesa);
  }
}
