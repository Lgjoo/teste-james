import { Directive } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  selector: '[appCpfCnpj]',
  host: {
    '(input)': 'onInputChange($event)'
  }
})
export class CpfCnpjDirective {

  constructor(private control : NgControl) { }

  onInputChange($event) {
    let valor = $event.target.value.replace(/[^0-9]/g, '');
    let cpfCnpj;
    if(valor.length <= 3) {
      cpfCnpj =valor.replace(/^(\d{0,3}).*/, '$1');
    } else if(valor.length <= 6) {
      cpfCnpj = valor.replace(/^(\d{0,3})(\d{0,3}).*/, '$1.$2');
    } else if(valor.length <= 9) {
      cpfCnpj = valor.replace(/^(\d{0,3})(\d{0,3})(\d{0,3}).*/, '$1.$2.$3');
    } else if(valor.length <= 11) {
      cpfCnpj = valor.replace(/^(\d{0,3})(\d{0,3})(\d{0,3})(\d{0,2}).*/, '$1.$2.$3-$4');
    } else if(valor.length <= 12) {
      cpfCnpj = valor.replace(/^(\d{0,2})(\d{0,3})(\d{0,3})(\d{0,4}).*/, '$1.$2.$3/$4');
    } else {
      cpfCnpj = valor.replace(/^(\d{0,2})(\d{0,3})(\d{0,3})(\d{0,4})(\d{0,2}).*/, '$1.$2.$3/$4-$5');
    }

    this.control.valueAccessor.writeValue(cpfCnpj);
  }

}
