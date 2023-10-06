import { Component } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-by-country-pages',
  templateUrl: './by-country-pages.component.html'
})
export class ByCountryPagesComponent {

  public countries: Country[] = [];
  public isLoading: boolean = false;
  public term: string = '';

  constructor( private countriesService: CountriesService) {}
  ngOnInit(): void {
    this.countries = this.countriesService.cacheStore.byCountry.countries;
    this.term = this.countriesService.cacheStore.byCountry.term;
  }

  searchByCountry( term: string): void{
    this.isLoading= true;
    this.countriesService.searchCountry( term )
      .subscribe( countries => {
        this.countries = countries;
        this.isLoading= false;
      });

  }

}
