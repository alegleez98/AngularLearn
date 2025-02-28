import { ChangeDetectionStrategy, Component, input, InputSignal } from '@angular/core';
import { GifsListItemComponent } from "./gifs-list-item/gifs-list-item.component";

@Component({
  selector: 'gifs-list',
  imports: [GifsListItemComponent],
  templateUrl: './gifs-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GifsListComponent {

  urls: InputSignal<string[]> = input.required<string[]>();
 }
