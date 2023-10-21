import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CadastroFonteRendaComponent } from './cadastro-fonte-renda/cadastro-fonte-renda.component';
import { VisaoFonteRendaComponent } from './visao-fonte-renda/visao-fonte-renda.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { NgxMaskModule, IConfig } from 'ngx-mask'


@NgModule({
  declarations: [
    AppComponent,
    CadastroFonteRendaComponent,
    VisaoFonteRendaComponent,
    MenuComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    NgxMaskModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
