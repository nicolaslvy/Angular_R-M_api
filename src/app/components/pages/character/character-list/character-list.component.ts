import { Component, OnInit } from '@angular/core';
import { Character } from 'src/app/shared/interfaces/characters.interface';
import { CharacterService } from 'src/app/shared/services/character.service';
import {take} from 'rxjs/operators';
type RequestInfo = {next: string}
@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.scss']
})
export class CharacterListComponent implements OnInit {
  characters: Character[] = [];
  info: RequestInfo = {next: '0'}
  private pagenum= 1;
  private query =  '';
  


  constructor(private characterSvc: CharacterService) { }

  ngOnInit(): void {
    this.getData()
  }
  private getData(): void{
    this.characterSvc.searchCharacters(this.query, this.pagenum).pipe(take(1)).subscribe(
      (res: any)=>{
        console.table(res);
        const {info,results} = res;
        this.characters = [...this.characters,...results];
        this.info = info;

      })
  }


}
