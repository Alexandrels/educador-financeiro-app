import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { User } from 'src/app/model/user';

@Component({
  selector: 'app-situacao-saldo',
  templateUrl: './situacao-saldo.component.html',
  styleUrls: ['./situacao-saldo.component.css']
})
export class SituacaoSaldoComponent implements OnInit, OnChanges{
  @Input() value: number = 0;
  @Input() valorLancado: number = 0;
  @Output() donationEvent = new EventEmitter<boolean>();

  backgroundColor = 'primary-collor';
  totalSaldo:number=10000;

  
  constructor() {
    
  }

  ngOnChanges(): void {
    console.log("onChanges do sitacao saldo");
    if(this.valorLancado > 0){
      this.value = this.value - this.valorLancado;
       let result = (this.value / this.totalSaldo) * 100;
       if (result < 50)
         setTimeout(() => {
           this.donationEvent.emit(true);
         }, 3000);

    }
  }

  ngOnInit(): void {
    console.log("onINit")
    this.value = this.totalSaldo;
  }

  onDblClickBalance(color: string) {
    this.backgroundColor = color;
  }

  getBackgroundColor() {
    return this.backgroundColor;
  }


}
