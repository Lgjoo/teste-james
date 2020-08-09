import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-logo-estabelecimento',
  templateUrl: './logo-estabelecimento.component.html',
  styleUrls: ['./logo-estabelecimento.component.css']
})
export class LogoEstabelecimentoComponent implements OnInit {

  constructor() { }

  @Input() urlLogo: string;

  ngOnInit(): void {
    
  }

}
