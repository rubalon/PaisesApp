import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountryTableComponent } from './components/country-table/country-table.component';
import { ByCapitalPagesComponent } from './pages/by-capital-pages/by-capital-pages.component';
import { ByCountryPagesComponent } from './pages/by-country-pages/by-country-pages.component';
import { ByRegionPagesComponent } from './pages/by-region-pages/by-region-pages.component';
import { CountryPageComponent } from './pages/country-page/country-page.component';
import { CountriesRoutingModule } from './countries-routing.module';
import { SharedModule } from '../shared/shared.module';
import { PruebaModule } from '../prueba/prueba.module';
import { EsPruebaComponent } from './pages/es-prueba/es-prueba.component';




@NgModule({
  declarations: [
    CountryTableComponent,
    ByCapitalPagesComponent,
    ByCountryPagesComponent,
    ByRegionPagesComponent,
    CountryPageComponent,
    EsPruebaComponent,
  ],
  imports: [
    CommonModule,
    CountriesRoutingModule,
    SharedModule,
    PruebaModule
  ]
})
export class CountriesModule { }
