import { Component, signal } from '@angular/core';
import { ToggleCasePipe } from '../../pipes/toggle-case.pipe';
import { heroes } from '../../data/heroes.data';
import { CanFlyPipe } from '../../pipes/can-fly.pipe';
import { ColorHeroPipe } from '../../pipes/color-hero.pipe';

@Component({
  selector: 'app-custom-page',
  imports: [ ToggleCasePipe, CanFlyPipe, ColorHeroPipe],
  templateUrl: './custom-page.component.html',
})
export default class CustomPageComponent {

  name = signal<string>('Alejandro González');

  upperCase = signal<boolean>(true);

  heroes = signal(heroes);

  changeUpper() {
    this.upperCase.set(!this.upperCase());
  }

}
