import { Country } from '../interfaces/country.interface';
import { RESTCountry } from '../interfaces/rest-countries.interface';

export class CountryMapper {
  //static RestCountry => Country
  static RestCountryToCountry(restCountry: RESTCountry): Country {
    const country: Country = {
      cca2: restCountry.cca2,
      capital: restCountry.capital?.join(','),
      flag: restCountry.flag,
      flagSvg: restCountry.flags.svg,
      population: restCountry.population,
      name: restCountry.translations['spa'].common ?? 'No Spanish name',
      region: restCountry.region,
      subRegion: restCountry.subregion,
    };
    return country;
  }

  //static RestCountry[] => Country[]
  static mapRestCountryArrayToCountryArray(restCountry: RESTCountry[]): Country[] {
    return restCountry.map(restCountry => this.RestCountryToCountry(restCountry));
  }
}
