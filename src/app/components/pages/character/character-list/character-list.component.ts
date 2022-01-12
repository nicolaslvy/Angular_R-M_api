import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.scss']
})
export class CharacterListComponent implements OnInit {
  characters: Character[] = []
  private pagenum= 1;
  private query =  '';
  


  constructor() { }

  ngOnInit(): void {
  }

}
