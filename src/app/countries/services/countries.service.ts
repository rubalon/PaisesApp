import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, delay, map, of, tap } from 'rxjs';
import { Country } from '../interfaces/country';
import { CacheStore } from '../interfaces/cache-store.interface';
import { Region } from '../interfaces/region.interface';

@Injectable({providedIn: 'root'})
export class CountriesService {


  private apiUrl: string = "https://restcountries.com/v3.1"
  public cacheStore: CacheStore = {
    byCapital: {term: '', countries: []},
    byCountry: {term: '', countries: []},
    byRegion: {region: '', countries: []},
  }

  constructor(private http: HttpClient) {
    this.loadFromLocalStorage();
   }

  private loadFromLocalStorage():void {
    if (! localStorage.getItem('cacheStore')) return;

    this.cacheStore = JSON.parse( localStorage.getItem('cacheStore')! );
  }

  private saveToLocalStorage():void {
    localStorage.setItem('cacheStore', JSON.stringify(this.cacheStore));
  }

  private getSearchByUrl(url: string): Observable<Country[]>{
    return this.http.get<Country[]>(url)
      .pipe(
        catchError( () => of([]) ),
        delay(400),
      )
  }

  searchCapital( capital: string): Observable<Country[]>{
    const url = `${ this.apiUrl }/capital/${capital}`;
    return this.getSearchByUrl(url)
      .pipe(
        tap(countries => {
          this.cacheStore.byCapital.countries = countries,
          this.cacheStore.byCapital.term = capital,
          this.saveToLocalStorage() })
        )
  }

  searchRegion( region: Region): Observable<Country[]>{
    const url = `${ this.apiUrl }/region/${region}`;
    return this.getSearchByUrl(url)
    .pipe(
        tap(countries => {
          this.cacheStore.byRegion.countries = countries,
          this.cacheStore.byRegion.region = region,
          this.saveToLocalStorage() })
        )
  }

  searchCountry( country: string): Observable<Country[]>{
    const url = `${ this.apiUrl }/name/${country}`;
    return this.getSearchByUrl(url)
    .pipe(
      tap(countries => {
        this.cacheStore.byCountry.countries = countries,
        this.cacheStore.byCountry.term = country,
        this.saveToLocalStorage()  })
      )
  }

  searchCountryByAlphacode(code: string): Observable<Country | null > {
    return this.http.get<Country[]>(`${ this.apiUrl }/alpha/${code}`)
      .pipe(
        map( countries => countries.length > 0 ? countries[0]: null ),
        catchError( error => {
          return of(null);
        })
      );
  }

}
