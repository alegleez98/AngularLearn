import { Component, inject, signal } from '@angular/core';
import { CountryListComponent } from '../../components/country-list/country-list.component';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { rxResource } from '@angular/core/rxjs-interop';
import { CountryService } from '../../services/country.service';
import { of } from 'rxjs';
import { Country } from '../../interfaces/country.interface';
import { Region } from '../../interfaces/region.type';

@Component({
  selector: 'app-by-region-page',
  imports: [CountryListComponent, RouterLinkActive, RouterLink],
  templateUrl: './by-region-page.component.html',
})
export class ByRegionPageComponent {

  countryService = inject(CountryService);
  selectedRegion = signal<Region|null>(null);
  countries = signal<Country[]>([]);
  public regions: Region[] = [
    'Africa',
    'Americas',
    'Asia',
    'Europe',
    'Oceania',
    'Antarctic',
  ];

  countryResource = rxResource({
      request: () => ({ query: this.selectedRegion() }),
      loader: ({ request }) => {
        if ( !request.query ) return of([]);
        return this.countryService.searchByRegion(request.query);
      }
  });

  selectRegion(region: Region) {
    this.selectedRegion.set(region);
  }

}
