import { DespesaService } from './../service/despesa.service';

import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TipoDespesa } from '../model/tipo-despesa';
import { Despesa } from '../model/despesa';
import { TipoDespesaService } from '../service/tipo-despesa.service';

@Component({
  selector: 'app-detalhe-extrato',
  templateUrl: './detalhe-extrato.component.html',
  styleUrls: ['./detalhe-extrato.component.css']
})
export class DetalheExtratoComponent {
  transacoes: Despesa[] = [];
  transacao!:Despesa;

  ngOnInit(): void {
    // this.criarTransacoes();
    let idParam: number = +this.route.snapshot.paramMap.get('id')!;

    this.transacoes = this.transacoes.filter((t) => {
      return t.id === idParam;
    });
    this.carregarDetalheExtrao(idParam);

  }
  constructor(private route: ActivatedRoute, private despesaService: DespesaService, private tipoDespesaService: TipoDespesaService) {}

  carregarDetalheExtrao(id: number){
    this.despesaService.getById(id).subscribe(
      (data: Despesa) =>{
        if (!data ) {
          alert('Nenhum resultado foi encontrado!');
        }
        this.transacao = data;
        this.tipoDespesaService.getById(data.tipoDespesaId).subscribe(
          (tipo: TipoDespesa)=>{
            if (tipo ) {
              this.transacao.tipoDespesaId = tipo.descricao;
            }
          },
          (error)=>{
            console.log('nao conseguiu desc tipo despesa');
            console.log(error);
          }
        )
      },
      (error) => {
        console.log('componente');
        console.log(error);
        alert(error.message);
      }
    );
  }

}
