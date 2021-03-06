import { Component, OnInit, Input } from '@angular/core';
import { Estabelecimento } from '../../models/estabelecimento';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-estabelecimento',
  templateUrl: './card-estabelecimento.component.html',
  styleUrls: ['./card-estabelecimento.component.css']
})
export class CardEstabelecimentoComponent implements OnInit {

  constructor(private router: Router) { }

  @Input() estabelecimento: Estabelecimento;

  ngOnInit(): void {
    this.verificaItemSalvo();
  }

  abrirDetalhesEstabelecimento(): void {
    this.router.navigate(['/detalhes-estabelecimentos'], { queryParams: { estabelecimento: JSON.stringify(this.estabelecimento) }});
  }

  verificaItemSalvo() {
    let itemSalvo = JSON.parse(localStorage.getItem('estabelecimento-'+this.estabelecimento.id));
    if(itemSalvo) {
      this.estabelecimento.address = itemSalvo.address;
      this.estabelecimento.cidade = itemSalvo.cidade;
      this.estabelecimento.name = itemSalvo.name;
    }
  }

}
