import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CadastroFonteRendaComponent } from './cadastro-fonte-renda/cadastro-fonte-renda.component';
import { VisaoFonteRendaComponent } from './visao-fonte-renda/visao-fonte-renda.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule, registerLocaleData } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { NgxMaskModule, IConfig } from 'ngx-mask';
import { LandPageComponent } from './land-page/land-page.component';
import { LoginComponent } from './login/login.component';
import { CadastroUsuarioComponent } from './cadastro-usuario/cadastro-usuario.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CadastroMetaComponent } from './cadastro-meta/cadastro-meta.component';
import { LancarDespesaComponent } from './lancar-despesa/lancar-despesa.component';
import { ExtratoComponent } from './extrato/extrato.component';
import { VisualizarFontesRendaComponent } from './visualizar-fontes-renda/visualizar-fontes-renda.component';
import { SituacaoSaldoComponent } from './shared/situacao-saldo/situacao-saldo.component';
import { ModalComponent } from './modal/modal.component';
import { DetalheExtratoComponent } from './detalhe-extrato/detalhe-extrato.component';
import { TotalUsuariosComponent } from './cadastro-usuario/total-usuarios/total-usuarios.component'
import { CpfPipe } from './pipes/cpf.pipe';
import ptBr from '@angular/common/locales/pt';

registerLocaleData(ptBr);

@NgModule({
  declarations: [
    AppComponent,
    CadastroFonteRendaComponent,
    VisaoFonteRendaComponent,
    MenuComponent,
    FooterComponent,
    LandPageComponent,
    LoginComponent,
    CadastroUsuarioComponent,
    DashboardComponent,
    CadastroMetaComponent,
    LancarDespesaComponent,
    ExtratoComponent,
    VisualizarFontesRendaComponent,
    SituacaoSaldoComponent,
    ModalComponent,
    DetalheExtratoComponent,
    TotalUsuariosComponent,
    CpfPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    HttpClientModule,
    FormsModule,
    NgxMaskModule.forRoot(),
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'pt-BR' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
