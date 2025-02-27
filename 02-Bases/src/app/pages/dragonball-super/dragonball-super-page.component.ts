//import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { CharacterListComponent } from "../../components/dragonball/character-list/character-list.component";
import { Character } from '../../interfaces/character.interface';
import { CharacterAddComponent } from "../../components/dragonball/character-add/character-add.component";

@Component({
  selector: 'app-dragonball-super',
  imports: [
    CharacterListComponent,
    CharacterAddComponent
],
  templateUrl: './dragonball-super-page.component.html',
  styleUrl: './dragonball-super-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DragonballSuperPageComponent {

  characters = signal<Character[]>([
    {id:1, name: 'Goku', power: 9001},
    {id:2, name: 'Vegetta', power: 8000},
    // {id:3, name: 'Piccolo', power: 3000},
    // {id:4, name: 'Yamcha', power: 500}
  ]);

  addCharacter(newCharacter: Character) {
    this.characters.update( (list) => [...list, newCharacter])
  }


  // powerClasses = computed(() => {
  //   return {
  //   'text-danger': true
  //   }
  // })
}
