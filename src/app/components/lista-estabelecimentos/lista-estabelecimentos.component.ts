import { Component, OnInit } from '@angular/core';
import { Estabelecimento } from '../../models/estabelecimento';
import { ListaEstabelecimentosService } from '../../services/lista-estabelecimentos.service';

@Component({
  selector: 'app-lista-estabelecimentos',
  templateUrl: './lista-estabelecimentos.component.html',
  styleUrls: ['./lista-estabelecimentos.component.css']
})
export class ListaEstabelecimentosComponent implements OnInit {
  estabelecimentos: Estabelecimento[];
  carregandoLista: boolean = true;

  constructor(private listaEstabelecimentosService: ListaEstabelecimentosService) { }

  ngOnInit(): void {
    this.getListaEstabelecimentos();
  }

  getListaEstabelecimentos(): void {
    this.listaEstabelecimentosService.getEstabelecimentos().subscribe(
      estabelecimentos => {
        this.estabelecimentos = estabelecimentos['establishments'];
        this.carregandoLista = false;
      }
    );
  }

}
