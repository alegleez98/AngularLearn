import { Component, inject } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { CountryService } from '../../services/country.service';
import { NotFoundComponent } from "../../../shared/components/NotFound/NotFound.component";
import { CountryInformationComponent } from "./country-information/country-information.component";

@Component({
  selector: 'app-country-page',
  imports: [NotFoundComponent, CountryInformationComponent],
  templateUrl: './countryPage.component.html',
})
export class CountryPageComponent {

  countryCode = inject(ActivatedRoute).snapshot.params['codeCountry'];
  countryService = inject(CountryService);

  countryResource = rxResource({
    request: () => ({ code: this.countryCode }),
    loader: ({ request }) => {
      return this.countryService.searchByCountryByAlphaCode(request.code);
    }
  })



}
