import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-alerta',
  templateUrl: './alerta.component.html',
  styleUrls: ['./alerta.component.css']
})
export class AlertaComponent implements OnInit {

  constructor() { }

  @Input() mensagem: string = '';
  @Output() fechaAlerta = new EventEmitter();

  ngOnInit(): void {
  }

  fecharAlerta() {
    this.fechaAlerta.emit();
  }

}
