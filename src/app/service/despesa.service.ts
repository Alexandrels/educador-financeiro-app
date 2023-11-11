import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError } from 'rxjs';
import { Despesa } from '../model/despesa';
import { RoutesAPI } from '../util/routes-api';
import { ErrorUtil } from '../util/error-util';

@Injectable({
  providedIn: 'root'
})
export class DespesaService {

  constructor(private httpClient: HttpClient) {}

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };


  getDespesas = (): Observable<Despesa[]> => {
    // const query: HttpParams = new HttpParams().set('username', username);
    // const options = username ? { params: query } : {};

    return this.httpClient.get<Despesa[]>(`${RoutesAPI.DESPESAS}`).pipe(
      //map((users: User[])=>users[0]),
      catchError(ErrorUtil.handleError)
    );
    
  };
}
