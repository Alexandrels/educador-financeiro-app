import { Component } from '@angular/core';
import { FonteRenda } from '../model/fonte-renda'

@Component({
  selector: 'app-visao-fonte-renda',
  templateUrl: './visao-fonte-renda.component.html',
  styleUrls: ['./visao-fonte-renda.component.css']
})
export class VisaoFonteRendaComponent {
    fontesRenda: FonteRenda[] = [
      { id: 1, descricao: 'Salário', valor: 3000 },
      { id: 2, descricao: 'Aluguel', valor: 1200 },
      { id: 3, descricao: 'Investimentos', valor: 500 },
    ];
}
