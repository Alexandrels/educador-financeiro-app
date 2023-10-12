import { Component } from '@angular/core';
import { FonteRenda } from '../model/fonte-renda'

@Component({
  selector: 'app-cadastro-fonte-renda',
  templateUrl: './cadastro-fonte-renda.component.html',
  styleUrls: ['./cadastro-fonte-renda.component.css']
})
export class CadastroFonteRendaComponent {
  fonteRenda: FonteRenda = {
    id: 1,
    descricao: '',
    valor: 0
  };
}
