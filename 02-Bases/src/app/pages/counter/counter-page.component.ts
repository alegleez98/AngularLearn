import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter-page.component.html',
  styleUrl: './counter-page.component.css'
})
export class CounterPageComponent {

  counter = 10;

  increasyBy( value: number) {
    this.counter += value;
  }

  reset() {
    this.counter = 10;
  }

}
