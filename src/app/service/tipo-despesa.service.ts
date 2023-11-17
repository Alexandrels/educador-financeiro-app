import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError } from 'rxjs';
import { RoutesAPI } from '../util/routes-api';
import { TipoDespesa } from '../model/tipo-despesa';
import { ErrorUtil } from '../util/error-util';

@Injectable({
  providedIn: 'root',
})
export class TipoDespesaService {
  URL = RoutesAPI.TIPO_DESPESAS;

  constructor(private httpClient: HttpClient) {}

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  getTipoDespesas = (): Observable<TipoDespesa[]> => {
    return this.httpClient
      .get<TipoDespesa[]>(`${this.URL}`)
      .pipe(
        //map((users: User[])=>users[0]),
        catchError(ErrorUtil.handleError)
      );
  };

  getById(id: string): Observable<TipoDespesa> {
    return this.httpClient.get<TipoDespesa>(`${this.URL}/${id}`);
  }
}
