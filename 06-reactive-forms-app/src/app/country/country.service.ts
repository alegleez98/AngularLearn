import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Country } from './interfaces/country.interface';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  private baseUrl = 'https://restcountries.com/v3.1'
  http = inject(HttpClient);

  private _regions: string[] = [
    'Africa',
    'Americas',
    'Asia',
    'Europe',
    'Oceania'
  ];

  get regions(): string[] {
    return [ ...this._regions];
  }

  getCountriesByRegion( region: string): Observable<Country[]> {
    if(!region) return of([]);

    console.log({region});
    const url = `${this.baseUrl}/region/${region}?fields=cca3,name,borders`;
    return this.http.get<Country[]>(url);
  }

  getCountryByAlphaCode(alphaCode: string): Observable<Country> {
    if(!alphaCode) return of();

    console.log({alphaCode});
    const url = `${this.baseUrl}/alpha/${alphaCode}?fields=cca3,name,borders`;
    return this.http.get<Country>(url);
  }

  getCountryBordersByCodes( borders: string[]) {
    // TODO POR HACER
  }








}
