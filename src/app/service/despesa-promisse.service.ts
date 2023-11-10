import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RoutesAPI } from '../util/routes-api';
import { Despesa } from '../model/despesa';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DespesaPromisseService {

  URL = RoutesAPI.DESPESAS;

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private httpClient: HttpClient) {}

 async getById(id: number): Promise<Despesa> {

      const result = await firstValueFrom(this.httpClient.get<Despesa>(`${this.URL}/${id}`));

    return result;
  }

 async save(transaction: Despesa): Promise<Despesa> {
  const result = await firstValueFrom(this.httpClient
    .post<Despesa>(
      this.URL,
      JSON.stringify(transaction),
      this.httpOptions
    ));
    return result;
  }

  // patch(transaction: Despesa): Promise<Despesa> {
  //   return this.httpClient
  //     .patch<Despesa>(
  //       this.URL,
  //       JSON.stringify(transaction),
  //       this.httpOptions
  //     )
  //     .toPromise();
  // }

  // update(transaction: Despesa): Promise<Despesa> {
  //   return this.httpClient
  //     .put<Despesa>(this.URL, JSON.stringify(transaction), this.httpOptions)
  //     .toPromise();
  // }

  async list(): Promise<Despesa[]> {
    const result = await firstValueFrom(this.httpClient
      .get<Despesa[]>(
        this.URL,
        this.httpOptions
      ));
      return result;
    }
}
