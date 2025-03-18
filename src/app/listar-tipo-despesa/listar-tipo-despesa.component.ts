import { Component, OnInit } from '@angular/core';
import { TipoDespesa } from '../model/tipo-despesa';
import { TipoDespesaService } from '../service/tipo-despesa.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-listar-tipo-despesa',
  templateUrl: './listar-tipo-despesa.component.html',
  styleUrls: ['./listar-tipo-despesa.component.css']
})
export class ListarTipoDespesaComponent implements OnInit {
  tipoDespesaList?: TipoDespesa[];
  tipoDespesaAtual?: TipoDespesa;
  currentIndex = -1;
  title = '';

  constructor(private tipoDespesaService: TipoDespesaService) { }

  ngOnInit(): void {
    this.retrieveTutorials();
  }

  refreshList(): void {
    this.tipoDespesaAtual = undefined;
    this.currentIndex = -1;
    this.retrieveTutorials();
  }

  retrieveTutorials(): void {
    this.tipoDespesaService.getAll().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ id: c.payload.doc.id, ...c.payload.doc.data() })
        )
      )
    ).subscribe(data => {
      this.tipoDespesaList = data;
    });
  }

  setActiveTutorial(tipoDespesa: TipoDespesa, index: number): void {
    this.tipoDespesaAtual = tipoDespesa;
    this.currentIndex = index;
  }
}
