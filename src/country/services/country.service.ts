import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { catchError, delay, map, Observable, tap, throwError } from 'rxjs';
import { RESTCountryResponse } from '../interfaces/rest-countries.interface';
import { CountryMapper } from '../mapper/country.mapper';
import { Country } from '../interfaces/country.interface';

const API_URL: string = 'https://restcountries.com/v3.1'

@Injectable({
  providedIn: 'root'
})
export class CountryService {


  private http = inject(HttpClient);

  constructor() { }

  searchByCapital(query: string): Observable<Country[]> {
    query = query.toLowerCase();
    return this.http.get<RESTCountryResponse[]>(`${API_URL}/capital/${query}`)
      .pipe(
        map(resp => CountryMapper.mapRestCountriesToCountries(resp)),
        delay(500),
        catchError((error) => {
          return throwError(
            () => new Error(`Can't find any value with: ${query}`)
          )
        }),
      );
  }

  searchByCountry(query: string): Observable<Country[]> {
    query = query.toLowerCase();
    return this.http.get<RESTCountryResponse[]>(`${API_URL}/name/${query}`)
      .pipe(
        map(resp => CountryMapper.mapRestCountriesToCountries(resp)),
        delay(500),
        catchError((error) => {
          return throwError(
            () => new Error(`Can't find any value with: ${query}`)
          )
        }),
      );
  }

  searchCountryByAlphaCode(code: string) {
    return this.http.get<RESTCountryResponse[]>(`${API_URL}/alpha/${code}`)
      .pipe(
        map(resp => CountryMapper.mapRestCountriesToCountries(resp)),
        map((countries) => countries.at(0)),
        catchError((error) => {
          return throwError(
            () => new Error(`Can't find any value with: ${code}`)
          )
        }),
      );
  }

}
