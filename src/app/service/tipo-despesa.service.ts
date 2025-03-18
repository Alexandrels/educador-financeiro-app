import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError } from 'rxjs';
import { RoutesAPI } from '../util/routes-api';
import { TipoDespesa } from '../model/tipo-despesa';
import { ErrorUtil } from '../util/error-util';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root',
})
export class TipoDespesaService {
  // URL = RoutesAPI.TIPO_DESPESAS;
  private dbPath = '/tipo-despesa-list';

  tipoDespesaListRef: AngularFirestoreCollection<TipoDespesa>;

  constructor(private db: AngularFirestore) {
    this.tipoDespesaListRef = db.collection(this.dbPath);
  }

  getAll(): AngularFirestoreCollection<TipoDespesa> {
    return this.tipoDespesaListRef;
  }

  create(tipoDespesa: TipoDespesa): any {
    return this.tipoDespesaListRef.add({ ...tipoDespesa });
  }

  update(id: string, data: any): Promise<void> {
    return this.tipoDespesaListRef.doc(id).update(data);
  }

  delete(id: string): Promise<void> {
    return this.tipoDespesaListRef.doc(id).delete();
  }

  // httpOptions = {
  //   headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  // };

  // getTipoDespesas = (): Observable<TipoDespesa[]> => {
  //   return this.httpClient
  //     .get<TipoDespesa[]>(`${this.URL}`)
  //     .pipe(
  //       //map((users: User[])=>users[0]),
  //       catchError(ErrorUtil.handleError)
  //     );
  // };

  // getById(id: string): Observable<TipoDespesa> {
  //   return this.httpClient.get<TipoDespesa>(`${this.URL}/${id}`);
  // }
}
