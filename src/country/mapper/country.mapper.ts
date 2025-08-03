import { count, subscribeOn } from 'rxjs';
import type { Country } from '../interfaces/country.interface';
import type { RESTCountryResponse } from '../interfaces/rest-countries.interface';
export class CountryMapper {
    static mapRESTCountryResponseToCountry(rc: RESTCountryResponse): Country {
        return {
            cca2: rc.cca2,
            flag: rc.flag,
            name: rc.name.common,
            svg: rc.flags.svg,
            capital: rc.capital.join(','),
            population: rc.population,
            region: rc.region,
            subRegion: rc.subregion,
        }


    }

    static mapRestCountriesToCountries(rcs: RESTCountryResponse[]): Country[] {
        return rcs.map(this.mapRESTCountryResponseToCountry);
    }
}