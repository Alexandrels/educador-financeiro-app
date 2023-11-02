import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroFonteRendaComponent } from './cadastro-fonte-renda/cadastro-fonte-renda.component';
import { LandPageComponent } from './land-page/land-page.component';
import { LoginComponent } from './login/login.component';
import { CadastroUsuarioComponent } from './cadastro-usuario/cadastro-usuario.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CadastroMetaComponent } from './cadastro-meta/cadastro-meta.component';
import { LancarDespesaComponent } from './lancar-despesa/lancar-despesa.component';
import { ExtratoComponent } from './extrato/extrato.component';
import { VisualizarFontesRendaComponent } from './visualizar-fontes-renda/visualizar-fontes-renda.component';
import { DetalheExtratoComponent } from './detalhe-extrato/detalhe-extrato.component';

const routes: Routes = [
  { path: 'inicio', component: LandPageComponent },
  { path: 'login', component: LoginComponent },
  { path: 'a/cadastro-usuario', component: CadastroUsuarioComponent },
  { path: 'cadastro-meta', component: CadastroMetaComponent },
  { path: 'lancar-despesa', component: LancarDespesaComponent },
  { path: 'extrato/detalhes/:id', component: DetalheExtratoComponent },
  { path: 'extrato', component: ExtratoComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'cadastro-fonte-renda', component: CadastroFonteRendaComponent },
  { path: 'visualizar-fontes-renda', component: VisualizarFontesRendaComponent },
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
