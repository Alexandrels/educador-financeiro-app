import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TipoDespesa } from '../model/tipo-despesa';
import { TipoDespesaService } from '../service/tipo-despesa.service';

@Component({
  selector: 'app-detalhe-tipo-despesa',
  templateUrl: './detalhe-tipo-despesa.component.html',
  styleUrls: ['./detalhe-tipo-despesa.component.css']
})
export class DetalheTipoDespesaComponent implements OnInit {
  @Input() tipoDespesa?: TipoDespesa;
  @Output() refreshList: EventEmitter<any> = new EventEmitter();
  tipoDespesaAtual: TipoDespesa = {
    descricao: '',
    published: false
  };
  message = '';

  constructor(private tipoDespesaService: TipoDespesaService) { }

  ngOnInit(): void {
    this.message = '';
  }

  ngOnChanges(): void {
    this.message = '';
    this.tipoDespesaAtual = { ...this.tipoDespesa };
  }

  updatePublished(status: boolean): void {
    if (this.tipoDespesaAtual.id) {
      this.tipoDespesaService.update(this.tipoDespesaAtual.id, { published: status })
      .then(() => {
        this.tipoDespesaAtual.published = status;
        this.message = 'Atualizado com sucesso!';
      })
      .catch(err => console.log(err));
    }
  }

  updateTutorial(): void {
    const data = {
      descricao: this.tipoDespesaAtual.descricao
    };

    if (this.tipoDespesaAtual.id) {
      this.tipoDespesaService.update(this.tipoDespesaAtual.id, data)
        .then(() => this.message = 'Tipo despesa atualizado com sucesso!')
        .catch(err => console.log(err));
    }
  }

  deleteTutorial(): void {
    if (this.tipoDespesaAtual.id) {
      this.tipoDespesaService.delete(this.tipoDespesaAtual.id)
        .then(() => {
          this.refreshList.emit();
          this.message = 'Deletado com sucesso!';
        })
        .catch(err => console.log(err));
    }
  }
}

