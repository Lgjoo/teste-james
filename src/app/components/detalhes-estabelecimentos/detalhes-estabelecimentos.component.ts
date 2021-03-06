import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Estabelecimento } from '../../models/estabelecimento';
import { FormGroup, FormBuilder } from  '@angular/forms';

@Component({
  selector: 'app-detalhes-estabelecimentos',
  templateUrl: './detalhes-estabelecimentos.component.html',
  styleUrls: ['./detalhes-estabelecimentos.component.css']
})
/**
 * @TODO: melhorar aviso de salvo
 */
export class DetalhesEstabelecimentosComponent implements OnInit {

  constructor(private route: ActivatedRoute, private formBuilder: FormBuilder) { 
    this.criaFormEstabelecimento();
  }

  estabelecimento: Estabelecimento;
  estabelecimentoForm: FormGroup;
  possuiItemSalvo: boolean;
  mostrarAlerta: boolean = false;
  mensagemAlerta: string = '';
  indexedDb = indexedDB.open("bancoJames", 1);

  ngOnInit(): void {
    this.indexedDb.onupgradeneeded = function(event) {
      //fazer a criação das tabelas, indices e popular o banco se necessário
    }

    this.indexedDb.onsuccess = function (event) { 
      //sucesso ao criar/abrir o banco de dados
    }

    this.indexedDb.onerror = function (event) { 
      //erro ao criar/abrir o banco de dados
    }
    
    this.carregaInformacoesEstabelecimento();
  }

  criaFormEstabelecimento(): void {
    this.estabelecimentoForm = this.formBuilder.group({
      name: [''],  
      cidade: [''],
      address: [''],
      banco: [''],  
      tipoConta: [''],
      cpfCnpj: [''],
      agencia: [''],  
      agenciaDv: [''],
      conta: [''],
      contaDv: [''],
      saqueAutomatico: ['']
    });
  }

  carregaInformacoesEstabelecimento(): void {
    let self = this;
    this.route.queryParams.subscribe(params => {
      self.estabelecimento = JSON.parse(params.estabelecimento);
      let itemSalvo = JSON.parse(localStorage.getItem('estabelecimento-'+self.estabelecimento.id));
      let dados;
      if(itemSalvo) {
        dados = itemSalvo;
        this.possuiItemSalvo = true;
      } else {
        dados = self.estabelecimento;
        this.possuiItemSalvo = false;
      }
      self.estabelecimentoForm.setValue({
        name: dados.name || '',
        cidade: dados.cidade || '',
        address: dados.address || '',
        banco: dados.banco || '',
        tipoConta: dados.tipoConta || '',
        cpfCnpj: dados.cpfCnpj || '',
        agencia: dados.agencia || '',
        agenciaDv: dados.agenciaDv || '',
        conta: dados.conta || '',
        contaDv: dados.contaDv || '',
        saqueAutomatico: dados.saqueAutomatico || ''
      });
    });
  }

  salvarInformacoesEstabelecimento():void {
    if(this.possuiItemSalvo) {
      localStorage.removeItem('estabelecimento-'+this.estabelecimento.id);
    }
    localStorage.setItem('estabelecimento-'+this.estabelecimento.id, JSON.stringify(this.estabelecimentoForm.value));
    this.estabelecimento.name = this.estabelecimentoForm.value.name;
    this.mensagemAlerta = 'As informações foram salvas com sucesso!';
    this.mostrarAlerta = true;
  }

  fechaAlerta():void {
    this.mostrarAlerta = false;
    this.mensagemAlerta = '';
  }

}
