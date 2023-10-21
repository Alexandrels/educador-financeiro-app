import { FonteRenda } from './../model/fonte-renda';
import { AfterViewInit, Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-cadastro-fonte-renda',
  templateUrl: './cadastro-fonte-renda.component.html',
  styleUrls: ['./cadastro-fonte-renda.component.css']
})
export class CadastroFonteRendaComponent implements OnInit{
  descricao="";
  valor=0;
  fonteRenda!: FonteRenda;

 
  ngOnInit(): void {
    console.log("Componente inicializado");
    this.fonteRenda = new FonteRenda('',0)
  }



  onSubmit() {
    this.fonteRenda = new FonteRenda(this.descricao, this.valor);
    console.log("Chegou no submit");
    console.log(`ID: ${this.fonteRenda.id}, Descrição: ${this.fonteRenda.descricao}, Valor: ${this.fonteRenda.valor}`);
  }

  isFormValid(): boolean {
    return this.descricao != null && this.valor > 0;
  }

       
}