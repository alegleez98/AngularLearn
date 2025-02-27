//import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { CharacterListComponent } from "../../components/dragonball/character-list/character-list.component";
import { Character } from '../../interfaces/character.interface';
import { CharacterAddComponent } from "../../components/dragonball/character-add/character-add.component";
import { DragonballService } from '../../services/dragonball.service';

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

  // FORMA ANTIGUA
  // constructor(
  //   public dragonballService: DragonballService
  // ) {

  // }

  //FORMA NUEVA INYECTAR DEPENDENCIAS
  public dragonballService = inject(DragonballService);

}
