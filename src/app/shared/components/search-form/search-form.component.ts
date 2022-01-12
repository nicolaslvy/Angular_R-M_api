import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-search-form',
  template: `
    <input
    #inputSearch
    autofocus
    type="text"
    class="form-control-sm"
    placeholder="Search....." 
    (keyup) = "onSearch(inputSearch.value)"/>
  `,
  styles: ['input {width:100%}']
})
export class SearchFormComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  onSearch(value: string){
    console.log(value)
     if(value && value.length > 3){
       this.router.navigate(['/character-list'],{queryParams: {q: value}})
     }


  }

}
