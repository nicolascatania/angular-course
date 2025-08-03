import { Component } from '@angular/core';
import { CountrySearchComponent } from '../../components/country-search/country-search.component';
import { CountryListComponent } from '../../components/country-list/country-list.component';

@Component({
  selector: 'app-by-region-page',
  imports: [CountrySearchComponent, CountryListComponent],
  templateUrl: './by-region-page.component.html',
})
export class ByRegionPageComponent {
  onSearch(value: string) {
    console.log({ value: value });
  }
}
