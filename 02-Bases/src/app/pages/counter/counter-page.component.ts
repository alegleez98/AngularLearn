import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter-page.component.html',
  styleUrl: './counter-page.component.css'
})
export class CounterPageComponent {

  counter = 10;
  counterSignal = signal(10);

  increasyBy( value: number) {
    this.counter += value;
    this.counterSignal.update((current) => current + value);

  }

  reset() {
    this.counter = 0;
    this.counterSignal.set(0);

  }

}
