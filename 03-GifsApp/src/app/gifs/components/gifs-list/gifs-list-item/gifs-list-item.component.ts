import { ChangeDetectionStrategy, Component, input, InputSignal } from '@angular/core';
import { Gif } from 'src/app/gifs/interfaces/Gif';

@Component({
  selector: 'gifs-list-item',
  imports: [],
  templateUrl: './gifs-list-item.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GifsListItemComponent {

  gif: InputSignal<Gif>  = input.required<Gif>();
}
