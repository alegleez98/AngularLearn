import { Component, signal } from '@angular/core';
import { ToggleCasePipe } from '../../pipes/toggle-case.pipe';
import { heroes } from '../../data/heroes.data';
import { CanFlyPipe } from '../../pipes/can-fly.pipe';
import { ColorHeroPipe } from '../../pipes/color-hero.pipe';
import { HeroTextColorPipe } from '../../pipes/hero-text-color.pipe';
import { TitleCasePipe } from '@angular/common';
import { HeroCreatorPipe } from '../../pipes/hero-creator.pipe';
import { HeroSortByPipe } from '../../pipes/hero-sort-by.pipe';
import { Hero } from '../../interfaces/hero.interface';
import { HeroFilterPipe } from '../../pipes/heroFilter.pipe';

@Component({
  selector: 'app-custom-page',
  imports: [ ToggleCasePipe, CanFlyPipe, ColorHeroPipe, HeroTextColorPipe, TitleCasePipe, HeroCreatorPipe, HeroSortByPipe, HeroFilterPipe],
  templateUrl: './custom-page.component.html',
})
export default class CustomPageComponent {

  name = signal<string>('Alejandro González');

  upperCase = signal<boolean>(true);

  heroes = signal(heroes);

  sortBy = signal<keyof Hero | null>(null);

  searchQuery = signal('');

  changeUpper() {
    this.upperCase.set(!this.upperCase());
  }

}
