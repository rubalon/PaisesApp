import { Component } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-by-country-pages',
  templateUrl: './by-country-pages.component.html'
})
export class ByCountryPagesComponent {

  public countries: Country[] = [];

  constructor( private countriesService: CountriesService) {}

  searchByCountry( term: string): void{
    this.countriesService.searchCountry( term )
      .subscribe( countries => {
        this.countries = countries;
      });

  }

}
