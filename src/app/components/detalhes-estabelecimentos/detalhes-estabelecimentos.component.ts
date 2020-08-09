import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Estabelecimento } from '../../models/estabelecimento';

@Component({
  selector: 'app-detalhes-estabelecimentos',
  templateUrl: './detalhes-estabelecimentos.component.html',
  styleUrls: ['./detalhes-estabelecimentos.component.css']
})
/**
 * @TODO: tratar rota com estabelecimento inexistente
 */
export class DetalhesEstabelecimentosComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  estabelecimento: Estabelecimento;

  ngOnInit(): void {
    let self = this;
    this.route.queryParams.subscribe(params => {
      self.estabelecimento = JSON.parse(params.estabelecimento);
     });
  }

}
