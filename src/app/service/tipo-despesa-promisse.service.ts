import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { Despesa } from '../model/despesa';
import { RoutesAPI } from '../util/routes-api';
import { TipoDespesa } from '../model/tipo-despesa';

@Injectable({
  providedIn: 'root'
})
export class TipoDespesaPromisseService {

  URL = RoutesAPI.TIPO_DESPESAS;

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private httpClient: HttpClient) {}

  async get(id:string): Promise<TipoDespesa> {
    const result = await firstValueFrom(this.httpClient
      .get<TipoDespesa>(
        `${this.URL}/${id}`,
        this.httpOptions
      ));
      return result;
    }
}
