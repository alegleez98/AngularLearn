import { Component, input, output } from '@angular/core';

@Component({
  selector: 'country-search-input',
  imports: [],
  templateUrl: './searchInput.component.html',
})
export class SearchInputComponent {

  value = output<string>();
  placeholder = input<string>('Búsqueda');

}
