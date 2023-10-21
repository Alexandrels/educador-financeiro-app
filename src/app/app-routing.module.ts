import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroFonteRendaComponent } from './cadastro-fonte-renda/cadastro-fonte-renda.component';

const routes: Routes = [
  { path: 'inicio', component: CadastroFonteRendaComponent },
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
