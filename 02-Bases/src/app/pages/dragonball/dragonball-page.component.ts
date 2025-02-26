//import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';

interface Character {
  id: number,
  name: string,
  power: number;
}

@Component({
  selector: 'app-dragonball',
  imports: [
    //NgClass
  ],
  templateUrl: './dragonball-page.component.html',
  styleUrl: './dragonball-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DragonballPageComponent {

  characters = signal<Character[]>([
    {id:1, name: 'Goku', power: 9001},
    {id:2, name: 'Vegetta', power: 8000},
    {id:3, name: 'Piccolo', power: 3000},
    {id:4, name: 'Yamcha', power: 500}
  ]);

  // powerClasses = computed(() => {
  //   return {
  //   'text-danger': true
  //   }
  // })
}
