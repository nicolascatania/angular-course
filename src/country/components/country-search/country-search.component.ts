import { Component, EventEmitter, input, output, Output, signal } from '@angular/core';

@Component({
  selector: 'country-search',
  imports: [],
  templateUrl: './country-search.component.html',
})
export class CountrySearchComponent {

  placeHolder = input<string>('Search by capital');
  searched = output<string>();


  onSearch(value: string) {
    this.searched.emit(value);
  }
}
