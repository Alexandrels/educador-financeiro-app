import { DespesaPromisseService } from '../service/despesa-promisse.service';
import { User } from './../model/user';
import { DatePipe } from '@angular/common';
import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { SituacaoSaldoComponent } from '../shared/situacao-saldo/situacao-saldo.component';
import { format } from 'date-fns';
import { Despesa } from '../model/despesa';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-lancar-despesa',
  templateUrl: './lancar-despesa.component.html',
  styleUrls: ['./lancar-despesa.component.css'],
  providers: [DespesaPromisseService],
})
export class LancarDespesaComponent implements OnInit {
  valorSaldo: number = 0;
  user!: User;
  valorLancado: number = 0;
  valorDigitado: number = 0;
  descricao = '';
  dataLancada!: string;
  idParam!: string;

  success = false;
  message = '';
  submitted = false;

  @ViewChild(SituacaoSaldoComponent)
  situacaoSaldoComponent!: SituacaoSaldoComponent;

  modal = {
    show: false,
    title: '',
    text: '',
  };

  constructor(
    private route: ActivatedRoute,
    private despesaService: DespesaPromisseService
  ) {
    this.dataLancada = format(new Date(), 'dd/MM/yyyy');
  }
  ngOnInit(): void {
    this.idParam = this.route.snapshot.paramMap.get('id')!;
    console.log('ID TIPO DESPESA VINDO DASH ' + this.idParam);
    if (!this.idParam) {
      this.idParam = 'LAZER';
    }
    console.log(this.valorLancado);
    // this.value = this.situacaoSaldoComponent.value;
  }
  ngAfterViewInit(): void {
    //demonstração de acesso de um atributo de componente filho por referência
    console.log(`Sua renda esta em R$ ${this.situacaoSaldoComponent.value}`);
  }

  carregarDespesas() {
    this.despesaService;
  }

  onSubmit() {
    console.log('Chegou no submit');
    this.valorLancado = this.valorDigitado;
    var despesa = new Despesa(this.valorDigitado, this.descricao, this.idParam);
    this.despesaService
      .save(despesa)
      .then(() => {
        this.success = true;
        this.message = 'Lançado com sucesso!';
      })
      .finally(() => {
        console.log('A operação foi finalizada!');
        this.limparForm();
      });
  }

  isFormValid(): boolean {
    return (
      this.descricao != null &&
      this.descricao.length > 0 &&
      this.valorDigitado > 0 &&
      this.dataLancada != null
    );
  }

  limparForm() {
    this.descricao = '';
    this.valorDigitado = 0;
    this.dataLancada = format(new Date(), 'dd/MM/yyyy');
  }
  onSelectChange(event: Event) {
    let tipoDespesa = (event.target as HTMLInputElement).value;
    alert(`Tipo despesa será lançada ${tipoDespesa}`);
  }

  onRendaComprometidaEvent(event: boolean) {
    this.modal.show = event;
    this.modal.title = 'Aviso!';
    this.modal.text = `Você já comprometeu mais de 50% da sua renda
    Tome cuidado com os gastos!`;
  }

  onCloseModal() {
    this.modal.show = false;
  }
}
