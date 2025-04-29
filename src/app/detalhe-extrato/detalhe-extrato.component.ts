import { DespesaService } from './../service/despesa.service';

import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TipoDespesa } from '../model/tipo-despesa';
import { Despesa } from '../model/despesa';
import { TipoDespesaService } from '../service/tipo-despesa.service';

@Component({
  selector: 'app-detalhe-extrato',
  templateUrl: './detalhe-extrato.component.html',
  styleUrls: ['./detalhe-extrato.component.css']
})
export class DetalheExtratoComponent implements OnInit{
  // transacoes: Despesa[] = [];
  // transacao!:Despesa;

  @Input() despesa?: Despesa;
  @Output() refreshList: EventEmitter<any> = new EventEmitter();
  despesaAtual: Despesa = {
    id:'',
    userId: '',
    valor: 0,
    descricao:'',
    dataLancamento: new Date(),
    tipoDespesaId:'',
    published: false
  };
  message = '';

  constructor(private route: ActivatedRoute, private despesaService: DespesaService
    // , private tipoDespesaService: TipoDespesaService
  ) {}

  ngOnInit(): void {
    // this.criarTransacoes();
    // let idParam: number = +this.route.snapshot.paramMap.get('id')!;

    // this.transacoes = this.transacoes.filter((t) => {
    //   return t.id === idParam;
    // });
    // this.carregarDetalheExtrao(idParam);
    this.message = '';

  }

  ngOnChanges(): void {
    this.message = '';
    this.despesaAtual = { ...this.despesa };
  }

  updatePublished(status: boolean): void {
    if (this.despesaAtual.id) {
      this.despesaService.update(this.despesaAtual.id, { published: status })
      .then(() => {
        this.despesaAtual.published = status;
        this.message = 'The status was updated successfully!';
      })
      .catch(err => console.log(err));
    }
  }

  updateTutorial(): void {
    const data = {
      title: this.despesaAtual.descricao,
      description: this.despesaAtual.descricao
    };

    if (this.despesaAtual.id) {
      this.despesaService.update(this.despesaAtual.id, data)
        .then(() => this.message = 'The despesa was updated successfully!')
        .catch(err => console.log(err));
    }
  }

  deleteTutorial(): void {
    if (this.despesaAtual.id) {
      this.despesaService.delete(this.despesaAtual.id)
        .then(() => {
          this.refreshList.emit();
          this.message = 'The tutorial was updated successfully!';
        })
        .catch(err => console.log(err));
    }
  }

  // carregarDetalheExtrao(id: number){
    // this.despesaService.getById(id).subscribe(
    //   (data: Despesa) =>{
    //     if (!data ) {
    //       alert('Nenhum resultado foi encontrado!');
    //     }
    //     this.transacao = data;
    //     this.tipoDespesaService.getById(data.tipoDespesaId).subscribe(
    //       (tipo: TipoDespesa)=>{
    //         if (tipo ) {
    //           this.transacao.tipoDespesaId = tipo.descricao;
    //         }
    //       },
    //       (error)=>{
    //         console.log('nao conseguiu desc tipo despesa');
    //         console.log(error);
    //       }
    //     )
    //   },
    //   (error) => {
    //     console.log('componente');
    //     console.log(error);
    //     alert(error.message);
    //   }
    // );
  // }

}
