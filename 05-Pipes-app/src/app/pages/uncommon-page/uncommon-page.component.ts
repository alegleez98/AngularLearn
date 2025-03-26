import { Component, signal } from '@angular/core';
import { CardComponent } from '../../components/card/card.component';
import { AsyncPipe, I18nPluralPipe, I18nSelectPipe, JsonPipe, KeyValuePipe, SlicePipe, TitleCasePipe } from '@angular/common';
import { interval, map, tap } from 'rxjs';

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
  imports: [CardComponent, I18nSelectPipe, I18nPluralPipe, SlicePipe, JsonPipe, KeyValuePipe, TitleCasePipe, AsyncPipe],
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
    if (this.client() === client1) {
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
    this.clients.update(prev => prev.slice(1));
  }

  // KeyValue Pipe
  profile = {
    name: 'Alejandro',
    age: 26,
    address: 'Tenerfie, España'
  }

  // Async Pipe
  promiseValue: Promise<string> = new Promise((resolve,reject) => {
    setTimeout(() => {
      resolve('Tenemos data en la promesa')
      console.log('Promesa finalizada');
    }, 3500);
  });

  myObservableTimer = interval(2000).pipe(
    map( (value) => value + 1),
    tap( (value) => console.log('tap:', value))
  );

}
