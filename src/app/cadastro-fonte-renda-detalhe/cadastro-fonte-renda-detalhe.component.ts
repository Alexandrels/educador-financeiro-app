import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FonteRenda } from '../model/fonte-renda';
import { FirebaseService } from '../service/firebase.service';

@Component({
  selector: 'app-cadastro-fonte-renda-detalhe',
  templateUrl: './cadastro-fonte-renda-detalhe.component.html',
  styleUrls: ['./cadastro-fonte-renda-detalhe.component.css']
})
export class CadastroFonteRendaDetalheComponent implements OnInit {
  @Input() fonteRenda?: FonteRenda;
  @Output() refreshList: EventEmitter<any> = new EventEmitter();
  fonteRendaAtual: FonteRenda = {
    descricao: '',
    valor: 0,
    published: false
  };
  message = '';

  constructor(private firebaseService: FirebaseService) { }

  ngOnInit(): void {
    this.message = '';
  }

  ngOnChanges(): void {
    this.message = '';
    this.fonteRendaAtual = { ...this.fonteRenda };
  }

  updatePublished(status: boolean): void {
    if (this.fonteRendaAtual.id) {
      this.firebaseService.update(this.fonteRendaAtual.id, { published: status })
      .then(() => {
        this.fonteRendaAtual.published = status;
        this.message = 'The status was updated successfully!';
      })
      .catch(err => console.log(err));
    }
  }

  updatetipoDespesa(): void {
    const data = {
      valor: this.fonteRendaAtual.descricao,
      descricao: this.fonteRendaAtual.descricao
    };

    if (this.fonteRendaAtual.id) {
      this.firebaseService.update(this.fonteRendaAtual.id, data)
        .then(() => this.message = 'The tipoDespesa was updated successfully!')
        .catch(err => console.log(err));
    }
  }

  deletetipoDespesa(): void {
    if (this.fonteRendaAtual.id) {
      this.firebaseService.delete(this.fonteRendaAtual.id)
        .then(() => {
          this.refreshList.emit();
          this.message = 'The tipoDespesa was updated successfully!';
        })
        .catch(err => console.log(err));
    }
  }
}
