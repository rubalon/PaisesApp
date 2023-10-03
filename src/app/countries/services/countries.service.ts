import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map, of, tap } from 'rxjs';
import { Country } from '../interfaces/country';

@Injectable({providedIn: 'root'})
export class CountriesService {

  private apiUrl: string = "https://restcountries.com/v3.1"

  constructor(private http: HttpClient) { }

  searchCapital( capital: string): Observable<Country[]>{

    return this.http.get<Country[]>(`${ this.apiUrl }/capital/${capital}`)
      .pipe(
        catchError( error => {
          //console.log(error)
          return of([]);
        })
      );
  }

  searchRegion( region: string): Observable<Country[]>{
    return this.http.get<Country[]>(`${ this.apiUrl }/region/${region}`)
      .pipe(
        catchError( error => {
          //console.log(error)
          return of([]);
        })
      );
  }

  searchCountry( country: string): Observable<Country[]>{
    return this.http.get<Country[]>(`${ this.apiUrl }/name/${country}`)
      .pipe(
        catchError( error => {
          //console.log(error)
          return of([]);
        })
      );
  }

  searchCountryByAlphacode(code: string): Observable<Country | null > {
    console.log('alphad');
    return this.http.get<Country[]>(`${ this.apiUrl }/alpha/${code}`)
      .pipe(
        map( countries => countries.length > 0 ? countries[0]: null ),
        catchError( error => {
          //console.log(error)

          return of(null);
        })
      );
  }

}
