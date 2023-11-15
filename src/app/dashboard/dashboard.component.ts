import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { User } from '../model/user';
import { DashboardService } from '../service/dashboard.service';
import { Dashboard } from '../model/dashboard';
import { Router } from '@angular/router';

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

  constructor(private router: Router,private dashboardService: DashboardService) {}

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


  onClickItem(t: Dashboard) {
    this.router.navigate(['/lancar-despesa', t?.descricao]);
    // this.router.navigate(['/extrato/detalhes/', { id: t?.id }]);
  }

  onCloseModal() {
    this.modal.show = false;
  }

  getColor(percent: number): string {
    if(percent > 0.60){
      return 'red';

    }else if(percent > 0.45){
      return 'orange';
    }else{
      return 'green';
    }

  }



}
