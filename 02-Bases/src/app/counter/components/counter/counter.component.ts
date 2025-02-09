import { Component } from "@angular/core";


@Component({
  selector: "app-counter",
  standalone: false,
  templateUrl: "./counter.component.html"
})
export class CounterComponent {
  public counter: number = 10;

  increaseBy( value: number ):void {
    this.counter += value;
  }

  resetCounter() {
    this.counter = 10;
  }
}