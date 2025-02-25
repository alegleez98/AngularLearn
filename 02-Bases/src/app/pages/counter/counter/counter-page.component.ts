import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  template: `
  <h1> Counter = {{ counter }} </h1>
  <button (click)="increasyBy(1)"> +1 </button>
  `,
  styleUrl: './counter-page.component.css'
})
export class CounterPageComponent {

  counter = 10;

  increasyBy( value: number) {
    this.counter += value;
  }

}
