import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError } from 'rxjs';
import { Despesa } from '../model/despesa';
import { RoutesAPI } from '../util/routes-api';
import { ErrorUtil } from '../util/error-util';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class DespesaService {
  // URL = RoutesAPI.DESPESAS;
  private dbPath = '/despesa-list';

  despesaRef: AngularFirestoreCollection<Despesa>;

  constructor(private db: AngularFirestore) {
    this.despesaRef = db.collection(this.dbPath);
  }

  getAll(): AngularFirestoreCollection<Despesa> {
    return this.despesaRef;
  }

  create(tutorial: Despesa): any {
    return this.despesaRef.add({ ...tutorial });
  }

  update(id: string, data: any): Promise<void> {
    return this.despesaRef.doc(id).update(data);
  }

  delete(id: string): Promise<void> {
    return this.despesaRef.doc(id).delete();
  }
  
  // httpOptions = {
  //   headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  // };
  
  // constructor(private httpClient: HttpClient) {}

  // getDespesas = (): Observable<Despesa[]> => {
  //   // const query: HttpParams = new HttpParams().set('username', username);
  //   // const options = username ? { params: query } : {};

  //   return this.httpClient.get<Despesa[]>(`${this.URL}`).pipe(
  //     //map((users: User[])=>users[0]),
  //     catchError(ErrorUtil.handleError)
  //   );
    
  // };

  // getById(id: number): Observable<Despesa> {
  //   return this.httpClient.get<Despesa>(`${this.URL}/${id}`);
  // }


  
}
