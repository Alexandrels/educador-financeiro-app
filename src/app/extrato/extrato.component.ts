import { Component, OnInit } from '@angular/core';
import { Transacao } from '../model/transacao';
import { Despesa } from '../model/despesa';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.css'],
})
export class ExtratoComponent implements OnInit {
  transacoes: Transacao[] = [];

  ngOnInit(): void {
    this.criarTransacoes();
  }
  constructor(private router: Router) {}

  onClickItem(t: Transacao) {
    this.router.navigate(['/extrato/detalhes', t?.id]);
    // this.router.navigate(['/extrato/detalhes/', { id: t?.id }]);
  }

  criarTransacoes() {
    for (let i = 0; i < 20; i++) {
      const valor = Math.random() * 1000;
      const descricao = `Descrição ${i + 1}`;
      const descricaoDespesa = `Descrição da despesa ${i + 1}`;
      const despesa = new Despesa(descricaoDespesa);

      const transacao = new Transacao(i, valor, descricao, despesa);
      this.transacoes.push(transacao);
    }

    console.log(this.transacoes);
  }
}
