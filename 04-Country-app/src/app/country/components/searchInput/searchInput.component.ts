import { Component, effect, input, output, signal } from '@angular/core';

@Component({
  selector: 'country-search-input',
  imports: [],
  templateUrl: './searchInput.component.html',
})
export class SearchInputComponent {

  value = output<string>();
  placeholder = input<string>('Búsqueda');
  debounceTime = input(300);


  inputValue = signal<string>('');

  debounceEffect = effect((onCleanup) => {
    const value = this.inputValue();

    const timeout = setTimeout(() => {
      this.value.emit(value);
    }, this.debounceTime());

    onCleanup(() => {
      clearTimeout(timeout)
    })
  })
}
