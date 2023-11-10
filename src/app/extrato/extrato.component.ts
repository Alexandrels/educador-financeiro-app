import { TipoDespesaPromisseService } from './../service/tipo-despesa-promisse.service';
import { Component, OnInit } from '@angular/core';
import { Despesa } from '../model/despesa';
import { TipoDespesa } from '../model/tipo-despesa';
import { ActivatedRoute, Router } from '@angular/router';
import { DespesaPromisseService } from '../service/despesa-promisse.service';

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.css'],
  providers: [DespesaPromisseService, TipoDespesaPromisseService],
})
export class ExtratoComponent implements OnInit {
  transacoes!: Despesa[];

  constructor(
    private router: Router,
    private despesaService: DespesaPromisseService,
    private tipoDespesaPromisseService: TipoDespesaPromisseService
  ) {}

  ngOnInit(): void {
    // this.criarTransacoes();
    // this.despesaService.list().then(
    //   (data) => {
    //     this.transacoes = data;
    //   },
    //   (error) => {
    //     alert(error);
    //   }
    // );
    this.listaDespesas();
  }

  listaDespesas() {
    this.despesaService.list().then(
      (data) => {
        const promises = data.map((despesa) =>
          this.tipoDespesaPromisseService
            .get(despesa.tipoDespesaId)
            .then((tipo) => {
              despesa.tipoDespesaId = tipo.descricao; // Supondo que o serviço retorne a descrição
              return despesa;
            })
        );
        Promise.all(promises).then((transacoesComDescricao) => {
          this.transacoes = transacoesComDescricao;
        });
      },
      (error) => {
        alert(error);
      }
    );
  }

  onClickItem(t: Despesa) {
    this.router.navigate(['/extrato/detalhes', t?.id]);
    // this.router.navigate(['/extrato/detalhes/', { id: t?.id }]);
  }

  criarTransacoes() {
    for (let i = 0; i < 20; i++) {
      const valor = Math.random() * 1000;
      const descricao = `Descrição ${i + 1}`;
      const descricaoDespesa = `Descrição da despesa ${i + 1}`;
      const despesa = new TipoDespesa(descricaoDespesa);

      const transacao = new Despesa(valor, descricao, '1');
      this.transacoes.push(transacao);
    }

    console.log(this.transacoes);
  }
}
