import { TipoDespesaPromisseService } from './../service/tipo-despesa-promisse.service';
import { Component, OnInit } from '@angular/core';
import { Despesa } from '../model/despesa';
import { TipoDespesa } from '../model/tipo-despesa';
import { ActivatedRoute, Router } from '@angular/router';
import { DespesaPromisseService } from '../service/despesa-promisse.service';
import { DespesaService } from '../service/despesa.service';
import { map } from 'rxjs';

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.css'],
  providers: [DespesaPromisseService, TipoDespesaPromisseService],
})
export class ExtratoComponent implements OnInit {
  // transacoes!: Despesa[];

  despesaList?: Despesa[];
  despesaAtual?: Despesa;
  currentIndex = -1;
  title = '';

  constructor(private despesaService: DespesaService) { }

  ngOnInit(): void {
    // this.listaDespesas();
    this.retrieveTutorials();
  }

  refreshList(): void {
    this.despesaAtual = undefined;
    this.currentIndex = -1;
    this.retrieveTutorials();
  }

  retrieveTutorials(): void {
    this.despesaService.getAll().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ id: c.payload.doc.id, ...c.payload.doc.data() })
        )
      )
    ).subscribe(data => {
      this.despesaList = data;
    });
  }

  setActiveTutorial(despesa: Despesa, index: number): void {
    this.despesaAtual = despesa;
    this.currentIndex = index;
  }

  // listaDespesas() {
  //   this.despesaService.list().then(
  //     (data) => {
  //       const promises = data.map((despesa) =>
  //         this.tipoDespesaPromisseService
  //           .get(despesa.tipoDespesaId)
  //           .then((tipo) => {
  //             despesa.tipoDespesaId = tipo.descricao; // Supondo que o serviço retorne a descrição
  //             return despesa;
  //           })
  //       );
  //       Promise.all(promises).then((transacoesComDescricao) => {
  //         this.transacoes = transacoesComDescricao;
  //       });
  //     },
  //     (error) => {
  //       alert(error);
  //     }
  //   );
  // }

  // onClickItem(t: Despesa) {
  //   this.router.navigate(['/extrato/detalhes', t?.id]);
  //   // this.router.navigate(['/extrato/detalhes/', { id: t?.id }]);
  // }

}
