import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'countries-by-capital-pages',
  templateUrl: './by-capital-pages.component.html'
})
export class ByCapitalPagesComponent implements OnInit{

  public countries: Country[] = [];
  public isLoading: boolean = false;
  public term: string = '';

  constructor( private countriesService: CountriesService) {}
  ngOnInit(): void {
    this.countries = this.countriesService.cacheStore.byCapital.countries;
    this.term = this.countriesService.cacheStore.byCapital.term;
  }

  searchByCapital( term: string): void{
    this.isLoading = true;
    this.countriesService.searchCapital( term )
      .subscribe( countries => {
        this.countries = countries;
        this.isLoading = false;
      });


  }

}
