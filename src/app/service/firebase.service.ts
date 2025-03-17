// firebase.service.ts
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { FonteRenda } from '../model/fonte-renda';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  private dbPath = '/fonte-renda-list';
  fonteRendaRef: AngularFirestoreCollection<FonteRenda>;

  constructor(private db: AngularFirestore) {
      console.log('Firebase já inicializado.');
      this.fonteRendaRef = db.collection(this.dbPath);
  }

  getAll(): AngularFirestoreCollection<FonteRenda> {
    return this.fonteRendaRef;
  }

  create(fonteRenda: FonteRenda): any {
    return this.fonteRendaRef.add({ ...fonteRenda });
  }

  update(id: string, data: any): Promise<void> {
    return this.fonteRendaRef.doc(id).update(data);
  }

  delete(id: string): Promise<void> {
    return this.fonteRendaRef.doc(id).delete();
  }


}
