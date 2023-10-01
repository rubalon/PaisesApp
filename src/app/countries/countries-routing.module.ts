import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ByCapitalPagesComponent } from './pages/by-capital-pages/by-capital-pages.component';
import { ByCountryPagesComponent } from './pages/by-country-pages/by-country-pages.component';
import { ByRegionPagesComponent } from './pages/by-region-pages/by-region-pages.component';
import { CountryPageComponent } from './pages/country-page/country-page.component';

const routes: Routes = [
  {
    path: 'by-capital',
    component: ByCapitalPagesComponent
  },
  {
    path: 'by-country',
    component: ByCountryPagesComponent
  },
  {
    path: 'by-region',
    component: ByRegionPagesComponent
  },
  {
    path: '**',
    redirectTo: 'by-capital'
  },
  {
    path: 'by/:id',
    component: CountryPageComponent
  }
]

@NgModule({
  imports: [
    RouterModule.forChild( routes )
  ],
  exports: [
    RouterModule
  ]
})
export class CountriesRoutingModule { }
