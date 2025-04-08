import { Pipe, type PipeTransform } from '@angular/core';
import { Color } from '../interfaces/hero.interface';

@Pipe({
  name: 'colorHero',
})
export class ColorHeroPipe implements PipeTransform {

  transform(value: Color): string {
    console.log(value);
    return Color[value];
  }

}
