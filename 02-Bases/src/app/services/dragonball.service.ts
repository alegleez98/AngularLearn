import { Injectable, signal } from '@angular/core';
import { Character } from '../interfaces/character.interface';

@Injectable({
  providedIn: 'root'
})
export class DragonballService {

  constructor() { }

  characters = signal<Character[]>([
    { id: 1, name: 'Goku', power: 9001 },
    { id: 2, name: 'Vegetta', power: 8000 },
  ]);

  addCharacter(newCharacter: Character) {
    this.characters.update((list) => [...list, newCharacter])
  }

}
