import { Component, effect, input, linkedSignal, output, signal } from '@angular/core';

@Component({
  selector: 'country-search-input',
  imports: [],
  templateUrl: './searchInput.component.html',
})
export class SearchInputComponent {

  value = output<string>();
  placeholder = input<string>('Búsqueda');
  debounceTime = input(300);
  initialValue = input<string>();

  inputValue = linkedSignal<string>( () => this.initialValue() ?? '');

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
