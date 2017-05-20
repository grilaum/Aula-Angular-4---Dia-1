import { Component } from '@angular/core';
import { HoraAtualService } from './horaatual.service';

@Component({
  selector: 'getHoraAtual',
  template: '<p>{{agora}}</p>'
})
export class GetHoraAtualComponent {

  agora: String;

  constructor(HoraAtualService: HoraAtualService) {
    HoraAtualService.generateHoraAtual(1000, agora => this.agora = agora);
  }

}
