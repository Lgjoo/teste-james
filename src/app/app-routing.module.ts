import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaEstabelecimentosComponent } from './components/lista-estabelecimentos/lista-estabelecimentos.component';
import { DetalhesEstabelecimentosComponent } from './components/detalhes-estabelecimentos/detalhes-estabelecimentos.component';
import { EstabelecimentoNaoEncontradoComponent } from './components/estabelecimento-nao-encontrado/estabelecimento-nao-encontrado.component';

const routes: Routes = [
  {path: 'lista-estabelecimentos', component: ListaEstabelecimentosComponent},
  {path: 'detalhes-estabelecimentos', component: DetalhesEstabelecimentosComponent},
  {path: '', redirectTo: '/lista-estabelecimentos', pathMatch: 'full'},
  {path: '**', component: EstabelecimentoNaoEncontradoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
