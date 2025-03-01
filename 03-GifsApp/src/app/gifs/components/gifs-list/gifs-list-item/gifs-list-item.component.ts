import { ChangeDetectionStrategy, Component, input, InputSignal } from '@angular/core';

@Component({
  selector: 'gifs-list-item',
  imports: [],
  templateUrl: './gifs-list-item.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GifsListItemComponent {

  url: InputSignal<string>  = input.required<string>();
}
