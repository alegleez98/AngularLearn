import { JsonPipe } from '@angular/common';
import { Component, effect, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { CountryService } from '../../country.service';
import { filter, Subscription, switchMap, tap } from 'rxjs';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-country-page',
  imports: [ReactiveFormsModule, JsonPipe],
  templateUrl: './country-page.component.html',
})
export class CountryPageComponent {

  fb = inject(FormBuilder);
  countryService = inject(CountryService);
  regions = signal( this.countryService.regions);
  countriesByRegion = signal<Country[]>([]);
  borders = signal<Country[]>([]);
  myForm = this.fb.group({
    region: ['', Validators.required],
    country: ['', Validators.required],
    border: ['', Validators.required]
  });

  onFormChanged = effect( ( onCleanup ) => {
    const regionSuscription = this.onRegionChanged();
    const countrySuscription = this.onCountryChanged();

    onCleanup(() => {
      regionSuscription.unsubscribe();
      countrySuscription.unsubscribe();
    })
  });

  onRegionChanged(): Subscription {
    return this.myForm.get('region')!.valueChanges
      .pipe(
        tap(() => {
           this.myForm.get('country')!.setValue('');
           this.myForm.get('border')!.setValue('');
           this.borders.set([]);
           this.countriesByRegion.set([]);
          }),
          switchMap((region) => this.countryService.getCountriesByRegion(region ?? ''))
    )
    .subscribe((countries) => {
      this.countriesByRegion.set(countries);
      console.log({countries});
    });
  }

  onCountryChanged(): Subscription {
    return this.myForm.get('country')!.valueChanges
      .pipe(
        tap(() => {
           this.myForm.get('border')!.setValue('');
           this.borders.set([]);
        }),
        filter( value => value!.length > 0),
        switchMap((alphaCode) => this.countryService.getCountryByAlphaCode(alphaCode ?? '')),
        switchMap((country) => this.countryService.getCountryNamesByCodeArray(country.borders))
    )
    .subscribe((borders) => {
      console.log({borders});
    });
  }

}
