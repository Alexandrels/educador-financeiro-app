
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TipoDespesa } from '../model/tipo-despesa';
import { Despesa } from '../model/despesa';

@Component({
  selector: 'app-detalhe-extrato',
  templateUrl: './detalhe-extrato.component.html',
  styleUrls: ['./detalhe-extrato.component.css']
})
export class DetalheExtratoComponent {
  transacoes: Despesa[] = [];
  transacao!:Despesa;

  ngOnInit(): void {
    this.criarTransacoes();
    let idParam: number = +this.route.snapshot.paramMap.get('id')!;

    this.transacoes = this.transacoes.filter((t) => {
      return t.id === idParam;
    });

    if (this.transacoes.length == 0) {
      alert('Oppsss! A transação não foi encontrada!');
    }
    this.transacao = this.transacoes[0];

  }
  constructor(private route: ActivatedRoute) {}

  criarTransacoes() {
    for (let i = 0; i < 20; i++) {
      const valor = Math.random() * 1000;
      const descricao = `Descrição ${i + 1}`;
      const descricaoDespesa = `Descrição da despesa ${i + 1}`;
      const despesa = new TipoDespesa(descricaoDespesa);

      const transacao = new Despesa(valor,descricao,"1");
      this.transacoes.push(transacao);
    }

    console.log(this.transacoes);
  }

}
