import { Component } from '@angular/core';
import { TipoDespesa } from '../model/tipo-despesa';
import { TipoDespesaService } from '../service/tipo-despesa.service';

@Component({
  selector: 'app-cadastro-tipo-despesa',
  templateUrl: './cadastro-tipo-despesa.component.html',
  styleUrls: ['./cadastro-tipo-despesa.component.css']
})
export class CadastroTipoDespesaComponent {

  tipoDespesa: TipoDespesa = new TipoDespesa();
  submitted = false;

  constructor(private tipoDespesaService: TipoDespesaService) { }

  savetipoDespesa(): void {
    this.tipoDespesaService.create(this.tipoDespesa).then(() => {
      console.log('Tipo desepsa criada com sucesso!');
      this.submitted = true;
    });
  }

  newTipoDespesa(): void {
    this.submitted = false;
    this.tipoDespesa = new TipoDespesa();
  }

}
