import { Component } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-by-region-pages',
  templateUrl: './by-region-pages.component.html'
})
export class ByRegionPagesComponent {

  public countries: Country[] = [];

  constructor( private countriesService: CountriesService) {}

  searchByRegion( term: string): void{
    this.countriesService.searchRegion( term )
      .subscribe( countries => {
        this.countries = countries;
      });
      console.log('hola')

  }

}
