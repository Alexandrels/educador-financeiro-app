import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError } from 'rxjs';
import { RoutesAPI } from '../util/routes-api';
import { TipoDespesa } from '../model/tipo-despesa';
import { ErrorUtil } from '../util/error-util';

@Injectable({
  providedIn: 'root'
})
export class TipoDespesaService {

  constructor(private httpClient: HttpClient) {}

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };


  getTipoDespesas = (): Observable<TipoDespesa[]> => {
    // const query: HttpParams = new HttpParams().set('username', username);
    // const options = username ? { params: query } : {};

    return this.httpClient.get<TipoDespesa[]>(`${RoutesAPI.TIPO_DESPESAS}`).pipe(
      //map((users: User[])=>users[0]),
      catchError(ErrorUtil.handleError)
    );
    
  };
}
