import { DespesaService } from './despesa.service';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, forkJoin, map } from 'rxjs';
import { Dashboard } from '../model/dashboard';
import { Despesa } from '../model/despesa';
import { TipoDespesa } from '../model/tipo-despesa';
import { TipoDespesaService } from './tipo-despesa.service';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  constructor(
    private httpClient: HttpClient,
    private despesaService: DespesaService,
    private tipoDespesaService: TipoDespesaService) {}

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  // getByDescricao(username: string): Observable<Dashboard[]> {
  //   const query: HttpParams = new HttpParams().set('username', username);
  //   const options = username ? { params: query } : {};

  //   return this.httpClient.get<Dashboard[]>(`${RoutesAPI.USERS}`, options).pipe(
  //     //map((users: User[])=>users[0]),
  //     catchError(ErrorUtil.handleError)
  //   );
  // }
  getDespesas = (): Observable<Despesa[]> => {
    return this.despesaService.getDespesas();
  };

  getTipoDespesas = (): Observable<TipoDespesa[]> => {
    return this.tipoDespesaService.getTipoDespesas();
  };
  gerarDashboard = (): Observable<Dashboard[]> => {
    return forkJoin({
      despesas: this.getDespesas(),
      tipoDespesas: this.getTipoDespesas(),
    }).pipe(
      map(({ despesas, tipoDespesas }) => {
        const dashboardMap = new Map<string, number>();

        // Inicializar o mapa com valores zerados para cada tipo de despesa
        tipoDespesas.forEach((tipo) => {
          dashboardMap.set(tipo.id, 0);
        });

        // Somar os valores de despesas para cada tipo
        despesas.forEach((despesa) => {
          const valorAtual = dashboardMap.get(despesa.tipoDespesaId) || 0;
          dashboardMap.set(despesa.tipoDespesaId, valorAtual + despesa.valor);
        });

        // Criar instâncias de Dashboard com os totais
        const dashboards: Dashboard[] = [];
        tipoDespesas.forEach((tipo) => {
          const total = dashboardMap.get(tipo.id) || 0;
          const dashboard = new Dashboard(tipo.descricao, total);
          dashboards.push(dashboard);
        });

        return dashboards;
      })
    );
  };
}
