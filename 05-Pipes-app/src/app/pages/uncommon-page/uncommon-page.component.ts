import { Component, signal } from '@angular/core';
import { CardComponent } from '../../components/card/card.component';
import { I18nSelectPipe } from '@angular/common';

const client1 = {
  name: 'Alejandro',
  gender: 'male',
  age: 26,
  address: 'Tenerife, España'
}

const client2 = {
  name: 'Laura',
  gender: 'female',
  age: 27,
  address: 'Tenerife, España'
}

@Component({
  selector: 'app-uncommon-page',
  imports: [CardComponent, I18nSelectPipe],
  templateUrl: './uncommon-page.component.html',
})
export default class UncommonPageComponent {

  //i18nSelect
  client = signal(client1);

  invitationMap = {
    male: 'invitarlo',
    female: 'invitarla'
  }

  changeClient() {
    if ( this.client() === client1) {
      this.client.set(client2);
      return;
    }

    this.client.set(client1);
    return;
  }


}
