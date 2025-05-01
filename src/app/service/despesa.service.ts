import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Despesa } from '../model/despesa';
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

  getDespesas(): Observable<Despesa[]> {
    return this.despesaRef.valueChanges({ idField: 'id' });
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
  
}
