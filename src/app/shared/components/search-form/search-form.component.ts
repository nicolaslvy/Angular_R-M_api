import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-form',
  template: `
    <input
    #inputSearch
    autofocus
    type="text"
    class="form-control-sm"
    placeholder="Search....." >
  `,
  styles: ['input {width:100%}']
})
export class SearchFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
