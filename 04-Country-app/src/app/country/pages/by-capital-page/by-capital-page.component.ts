import { Component, inject } from '@angular/core';
import { SearchInputComponent } from "../../components/searchInput/searchInput.component";
import { CountryListComponent } from "../../components/country-list/country-list.component";
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-capital-page',
  imports: [SearchInputComponent, CountryListComponent],
  templateUrl: './by-capital-page.component.html',
})
export class ByCapitalPageComponent {

  countryService = inject(CountryService);

  onSearch(query: string): void {
    this.countryService.searchByCapital(query).subscribe(paises => {
      console.log(paises);
    });
  }
}
