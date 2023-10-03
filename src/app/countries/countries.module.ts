import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountryTableComponent } from './components/country-table/country-table.component';
import { ByCapitalPagesComponent } from './pages/by-capital-pages/by-capital-pages.component';
import { ByCountryPagesComponent } from './pages/by-country-pages/by-country-pages.component';
import { CountryPageComponent } from './pages/country-page/country-page.component';
import { CountriesRoutingModule } from './countries-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ByRegionPagesComponent } from './pages/by-region-pages/by-region-pages.component';




@NgModule({
  declarations: [
    CountryTableComponent,
    ByCapitalPagesComponent,
    ByCountryPagesComponent,
    CountryPageComponent,
    ByRegionPagesComponent,
  ],
  imports: [
    CommonModule,
    CountriesRoutingModule,
    SharedModule,
  ]
})
export class CountriesModule { }
