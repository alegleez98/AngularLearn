import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

interface Character {
  id: number,
  name: string,
  power: number;
}

@Component({
  selector: 'app-dragonball',
  imports: [],
  templateUrl: './dragonball-page.component.html',
  styleUrl: './dragonball-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DragonballPageComponent {

  characters = signal<Character[]>([
    {id:1, name: 'Goku', power: 9001},
    {id:1, name: 'Vegetta', power: 8000},
    {id:1, name: 'Krillin', power: 3000}
  ]);
}
