import { DespesaPromisseService } from '../service/despesa-promisse.service';
import { User } from './../model/user';
import { DatePipe } from '@angular/common';
import { AfterViewInit, ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { SituacaoSaldoComponent } from '../shared/situacao-saldo/situacao-saldo.component';
import { format } from 'date-fns';
import { Despesa } from '../model/despesa';
import { ActivatedRoute, Router } from '@angular/router';
import { DespesaService } from '../service/despesa.service';
import { TipoDespesaService } from '../service/tipo-despesa.service';
import { map } from 'rxjs';
import { TipoDespesa } from '../model/tipo-despesa';

declare var M: any; // Importa o Materialize JS globalmente

@Component({
  selector: 'app-lancar-despesa',
  templateUrl: './lancar-despesa.component.html',
  styleUrls: ['./lancar-despesa.component.css'],
  providers: [DespesaPromisseService],
})
export class LancarDespesaComponent implements OnInit, AfterViewInit {
  valorSaldo: number = 0;
  user!: User;
  valorLancado: number = 0;
  valorDigitado: number = 0;
  // descricao = '';
  dataLancada!: string;
  idParam!: string;
  despesa: Despesa = new Despesa();
  success = false;
  message = '';
  submitted = false;
  tipoDespesaList?: TipoDespesa[];

  @ViewChild(SituacaoSaldoComponent)
  situacaoSaldoComponent!: SituacaoSaldoComponent;

  modal = {
    show: false,
    title: '',
    text: '',
  };

  constructor(
    // private route: ActivatedRoute,
    // private despesaService: DespesaPromisseService
    private tipoDespesaService: TipoDespesaService,
    private despesaService: DespesaService
  ) {
    this.dataLancada = format(new Date(), 'dd/MM/yyyy');
  }
  ngOnInit(): void {
    // this.idParam = this.route.snapshot.paramMap.get('id')!;
    // console.log('ID TIPO DESPESA VINDO DASH ' + this.idParam);
    // if (!this.idParam) {
    //   this.idParam = 'LAZER';
    // }
    // console.log(this.valorLancado);
    // this.value = this.situacaoSaldoComponent.value;
    this.carregarTipoDespesa();
  }
  ngAfterViewInit(): void {
    //demonstração de acesso de um atributo de componente filho por referência
    // console.log(`Sua renda esta em R$ ${this.situacaoSaldoComponent.value}`);
    setTimeout(() => {
      const elems = document.querySelectorAll('select');
      M.FormSelect.init(elems);
    }, 500);
  }

  saveDespesa(): void {
    this.despesa.valor = this.valorDigitado,

      this.despesaService.create(this.despesa).then(() => {
        console.log('Created new item successfully!');
        this.submitted = true;
      });
    this.limparForm();
  }

  newTutorial(): void {
    this.submitted = false;
    this.despesa = new Despesa();
  }

  carregarTipoDespesa(): void {
    this.tipoDespesaService.getAll().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ id: c.payload.doc.id, ...c.payload.doc.data() })
        )
      )
    ).subscribe(data => {
      this.tipoDespesaList = data;
      console.log("TiposDespesa", this.tipoDespesaList)
    });
  }



  carregarDespesas() {
    this.despesaService.getAll();
  }

  // onSubmit() {
  //   console.log('Chegou no submit');
  //   this.valorLancado = this.valorDigitado;
  //   var despesa = new Despesa(this.valorDigitado, this.descricao, this.idParam);
  //   this.despesaService
  //     .save(despesa)
  //     .then(() => {
  //       this.success = true;
  //       this.message = 'Lançado com sucesso!';
  //     })
  //     .finally(() => {
  //       console.log('A operação foi finalizada!');
  //       this.limparForm();
  //     });
  // }

  isFormValid(): boolean {
    return (
      this.despesa.descricao != null &&
      this.despesa.descricao.length > 0 &&
      this.valorDigitado > 0 &&
      this.dataLancada != null
    );
  }

  limparForm() {
    this.despesa.descricao = '';
    this.valorDigitado = 0;
    this.dataLancada = format(new Date(), 'dd/MM/yyyy');
  }
  // onSelectChange(event: Event) {
  //   let tipoDespesa = (event.target as HTMLInputElement).value;
  //   alert(`Tipo despesa será lançada ${tipoDespesa}`);
  // }

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
