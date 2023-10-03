import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-country-page',
  templateUrl: './country-page.component.html'
})
export class CountryPageComponent implements OnInit {

  public country?: Country;

  constructor(
    private activatedRoute: ActivatedRoute,
    private countriesServices: CountriesService,
    private router: Router
    ) {}

  ngOnInit(): void {
    console.log('ng page')
    this.activatedRoute.params
      .pipe(
        switchMap( ({ id }) => this.countriesServices.searchCountryByAlphacode( id )),
      )
      .subscribe( country => {
        if(!country) return this.router.navigateByUrl('');
            return this.country = country;

      })
  }
}
