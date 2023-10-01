import { Component } from '@angular/core';

@Component({
  selector: 'countries-by-capital-pages',
  templateUrl: './by-capital-pages.component.html'
})
export class ByCapitalPagesComponent {

  searchByCapital( term: string): void{
    console.log('Desde ByCapital Page')
    console.log({term});

  }

}
