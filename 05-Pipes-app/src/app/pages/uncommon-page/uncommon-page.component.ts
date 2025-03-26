import { Component, signal } from '@angular/core';
import { CardComponent } from '../../components/card/card.component';
import { I18nPluralPipe, I18nSelectPipe } from '@angular/common';

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
  imports: [CardComponent, I18nSelectPipe, I18nPluralPipe],
  templateUrl: './uncommon-page.component.html',
})
export default class UncommonPageComponent {

  //i18n Select
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

  //i18n Plural

  clientsMap = signal({
    '=0': 'no tenemos ningún cliente esperando',
    '=1': 'tenemos un cliente esperando',
    '=2': 'tenemos 2 clientes esperando',
    other: 'tenemos # clientes esperando'
  });

  clients = signal([
    'Maria',
    'Pedro',
    'Fernando',
    'Alejandro',
    'Laura',
    'Juan'
  ]);

  deleteClient() {
    this.clients.update( prev => prev.slice(1));
  }

}
