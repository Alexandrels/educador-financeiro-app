import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { User } from '../model/user';
import { SituacaoSaldoComponent } from '../shared/situacao-saldo/situacao-saldo.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, AfterViewInit{
  valorSaldo: number = 0;
  valorLancado:number = 0;
  user!: User;
  value: number = 0;


  @ViewChild(SituacaoSaldoComponent)
  situacaoSaldoComponent!: SituacaoSaldoComponent;

  modal = {
    show: false,
    title: '',
    text: '',
  };

  ngOnInit(): void {

  }
  ngAfterViewInit(): void {
        //demonstração de acesso de um atributo de componente filho por referência
        console.log(`Sua renda esta em R$ ${this.situacaoSaldoComponent.value}`);
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
