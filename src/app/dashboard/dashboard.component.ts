import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { User } from '../model/user';
import { SituacaoSaldoComponent } from '../shared/situacao-saldo/situacao-saldo.component';
import { DashboardService } from '../service/dashboard.service';
import { Dashboard } from '../model/dashboard';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{
  valorSaldo: number = 0;
  valorLancado:number = 0;
  user!: User;
  value: number = 0;
  dashboards!: Dashboard[];

  constructor(private dashboardService: DashboardService) {}

  modal = {
    show: false,
    title: '',
    text: '',
  };

  ngOnInit(): void {
    this.dashboardService.gerarDashboard().subscribe(dashboards => {
      console.log(dashboards);
      this.dashboards = dashboards;
  });
  }

  onCloseModal() {
    this.modal.show = false;
  }



}
