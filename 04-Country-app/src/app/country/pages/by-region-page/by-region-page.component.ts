import { Component, inject, linkedSignal, signal } from '@angular/core';
import { CountryListComponent } from '../../components/country-list/country-list.component';
import { rxResource } from '@angular/core/rxjs-interop';
import { CountryService } from '../../services/country.service';
import { of } from 'rxjs';
import { Country } from '../../interfaces/country.interface';
import { Region } from '../../interfaces/region.type';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-by-region-page',
  imports: [CountryListComponent],
  templateUrl: './by-region-page.component.html',
})
export class ByRegionPageComponent {

  countryService = inject(CountryService);

  activatedRoute = inject(ActivatedRoute);
  router = inject(Router);

  queryParam = (this.activatedRoute.snapshot.queryParamMap.get('region') ?? '') as Region;


  selectedRegion = linkedSignal<Region>(() => this.queryParam ?? 'Americas');
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
      request: () => ({ region: this.selectedRegion() }),
      loader: ({ request }) => {
        if ( !request.region ) return of([]);
        this.router.navigate(['/country/by-region'], {
          queryParams: {
            region: request.region
          }
        })
        return this.countryService.searchByRegion(request.region);
      }
  });

  selectRegion(region: Region) {
    this.selectedRegion.set(region);
  }

}
