import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ListaEstabelecimentosComponent } from './components/lista-estabelecimentos/lista-estabelecimentos.component';
import { DetalhesEstabelecimentosComponent } from './components/detalhes-estabelecimentos/detalhes-estabelecimentos.component';
import { EstabelecimentoNaoEncontradoComponent } from './components/estabelecimento-nao-encontrado/estabelecimento-nao-encontrado.component';
import { CardEstabelecimentoComponent } from './components/card-estabelecimento/card-estabelecimento.component';
import { BotaoVoltarComponent } from './components/botao-voltar/botao-voltar.component';
import { LogoEstabelecimentoComponent } from './components/logo-estabelecimento/logo-estabelecimento.component';
import { TituloSecaoComponent } from './components/titulo-secao/titulo-secao.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ListaEstabelecimentosComponent,
    DetalhesEstabelecimentosComponent,
    EstabelecimentoNaoEncontradoComponent,
    CardEstabelecimentoComponent,
    BotaoVoltarComponent,
    LogoEstabelecimentoComponent,
    TituloSecaoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
