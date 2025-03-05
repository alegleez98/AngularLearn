import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { RESTCountry } from '../interfaces/rest-countries.interface';
import { CountryMapper } from '../mapper/country.mapper';
import { map, Observable, catchError, throwError, delay } from 'rxjs';
import { Country } from '../interfaces/country.interface';

const API_URL = 'https://restcountries.com/v3.1';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  private http = inject(HttpClient);


  searchByCapital( query: string ): Observable<Country[]> {
    query = query.toLowerCase();
    return this.http.get<RESTCountry[]>(`${API_URL}/capital/${query}`)
      .pipe(
        map((restCountries) => CountryMapper.mapRestCountryArrayToCountryArray(restCountries) ),
        catchError((error) => {
          console.log('Error fetching ', error);
          return throwError(() => new Error(`No se pudieron obtener paises con ese query: ${query}`));
        }),
      );
  }

  searchByCountry(query: string) {
    query = query.toLowerCase();
    return this.http.get<RESTCountry[]>(`${API_URL}/name/${query}`)
      .pipe(
        map((restCountries) => CountryMapper.mapRestCountryArrayToCountryArray(restCountries)),
        delay(3000),
        catchError((error) => {
          console.log('Error fetching ', error);
          return throwError(() => new Error(`No se pudieron obtener paises con ese query: ${query}`));
        }),
      );
  }

  searchByCountryByAlphaCode(code: string) {
    console.log(code);
    return this.http.get<RESTCountry[]>(`${API_URL}/alpha/${code}`)
      .pipe(
        map((restCountries) => CountryMapper.mapRestCountryArrayToCountryArray(restCountries)),
        map( countries => countries.at(0)),
        catchError((error) => {
          console.log('Error fetching ', error);
          return throwError(() => new Error(`No se pudieron obtener un pais con ese código: ${code}`));
        }),
      );
  }

}
