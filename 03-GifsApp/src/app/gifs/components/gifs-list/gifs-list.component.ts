import { ChangeDetectionStrategy, Component, input, InputSignal } from '@angular/core';
import { GifsListItemComponent } from "./gifs-list-item/gifs-list-item.component";
import { Gif } from '../../interfaces/Gif';

@Component({
  selector: 'gifs-list',
  imports: [GifsListItemComponent],
  templateUrl: './gifs-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GifsListComponent {

  gifs: InputSignal<Gif[]> = input.required<Gif[]>();
 }
