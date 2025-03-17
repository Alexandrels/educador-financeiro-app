import { FonteRenda } from './../model/fonte-renda';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FirebaseService } from '../service/firebase.service';


@Component({
  selector: 'app-cadastro-fonte-renda',
  templateUrl: './cadastro-fonte-renda.component.html',
  styleUrls: ['./cadastro-fonte-renda.component.css']
})
export class CadastroFonteRendaComponent implements OnInit {
  descricao = "";
  valor = 0;
  fonteRenda!: FonteRenda;

  submitted = false;
  error: string | null = null;

  constructor(private firebaseService: FirebaseService) { }

  ngOnInit(): void {
    console.log("Componente inicializado");
    this.fonteRenda = new FonteRenda('', 0)
  }

  novaFonteRenda() : void{
    this.submitted = false;
    this.fonteRenda = new FonteRenda('',0);
    this.descricao = "";
    this.valor = 0;
  }



  onSubmit() {
    this.fonteRenda = new FonteRenda(this.descricao, this.valor);
    this.firebaseService.create(this.fonteRenda).then(() => {
      console.log('Nova fonte criada com sucesso!');
      this.submitted = true;
    });
    console.log("Chegou no submit");
    console.log(`ID: ${this.fonteRenda.id}, Descrição: ${this.fonteRenda.descricao}, Valor: ${this.fonteRenda.valor}`);
  }

  isFormValid(): boolean {
    return this.descricao != null && this.valor > 0;
  }




}