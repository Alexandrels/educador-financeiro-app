import { User } from './../model/user';
import { DatePipe } from '@angular/common';
import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { SituacaoSaldoComponent } from '../shared/situacao-saldo/situacao-saldo.component';
import { format } from 'date-fns';

@Component({
  selector: 'app-lancar-despesa',
  templateUrl: './lancar-despesa.component.html',
  styleUrls: ['./lancar-despesa.component.css']
})
export class LancarDespesaComponent implements OnInit{
  valorSaldo: number = 0;
  user!:User;
  valorLancado:number = 0;
  valorDigitado:number = 0;
  descricao="";
  dataLancada!:string;

  @ViewChild(SituacaoSaldoComponent)
  situacaoSaldoComponent!: SituacaoSaldoComponent;

  modal = {
    show: false,
    title: '',
    text: '',
  };
 
  constructor(private cdRef: ChangeDetectorRef) {
    this.dataLancada= format(new Date(), 'dd/MM/yyyy');
  }
  ngOnInit(): void {
    console.log(this.valorLancado);
    // this.value = this.situacaoSaldoComponent.value;
   
  }
  ngAfterViewInit(): void {
    //demonstração de acesso de um atributo de componente filho por referência
    console.log(`Sua renda esta em R$ ${this.situacaoSaldoComponent.value}`);
  }



  onSubmit() {
    console.log("Chegou no submit");
    this.valorLancado = this.valorDigitado;
    this.limparForm();
    
    
  }

  isFormValid(): boolean {
    return this.descricao != null && this.descricao.length>0 && this.valorDigitado > 0 && this.dataLancada !=null;
  }

  limparForm(){
    this.descricao = "";
    this.valorDigitado = 0;
    this.dataLancada= format(new Date(), 'dd/MM/yyyy');

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
