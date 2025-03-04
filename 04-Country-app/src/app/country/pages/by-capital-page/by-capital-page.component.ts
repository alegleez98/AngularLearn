import { Component } from '@angular/core';
import { SearchInputComponent } from "../../components/searchInput/searchInput.component";
import { CountryListComponent } from "../../components/country-list/country-list.component";

@Component({
  selector: 'app-by-capital-page',
  imports: [SearchInputComponent, CountryListComponent],
  templateUrl: './by-capital-page.component.html',
})
export class ByCapitalPageComponent {


  onSearch(value: string): void {
    console.log(value);
  }
}
