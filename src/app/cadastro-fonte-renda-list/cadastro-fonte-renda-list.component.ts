import { Component, OnInit } from '@angular/core';
import { FonteRenda } from '../model/fonte-renda';
import { FirebaseService } from '../service/firebase.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-cadastro-fonte-renda-list',
  templateUrl: './cadastro-fonte-renda-list.component.html',
  styleUrls: ['./cadastro-fonte-renda-list.component.css']
})
export class CadastroFonteRendaListComponent implements OnInit {

  fonteRendaList?: FonteRenda[];
  fonteRendaAtual?: FonteRenda;
  currentIndex = -1;
  title = '';

  constructor(private firebaseService: FirebaseService){}

  ngOnInit(): void {
    this.retrievetipoDespesas()
  }

  refreshList(): void {
    this.fonteRendaAtual = undefined;
    this.currentIndex = -1;
    this.retrievetipoDespesas();
  }

  retrievetipoDespesas(): void {
    this.firebaseService.getAll().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ id: c.payload.doc.id, ...c.payload.doc.data() })
        )
      )
    ).subscribe(data => {
      this.fonteRendaList = data;
    });
  }

  setActivetipoDespesa(fonteRenda: FonteRenda, index: number): void {
    this.fonteRendaAtual = fonteRenda;
    this.currentIndex = index;
  }
}
