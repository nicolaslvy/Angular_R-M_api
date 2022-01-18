import { Component, OnInit, HostListener,Inject } from '@angular/core';
import { ActivatedRoute, ParamMap, Router,NavigationEnd } from '@angular/router';

import { Character } from 'src/app/shared/interfaces/characters.interface';
import { CharacterService } from 'src/app/shared/services/character.service';
import {filter, take} from 'rxjs/operators';


type RequestInfo = {next: string}
@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.scss']
})
export class CharacterListComponent implements OnInit {
  characters: Character[] = [];
  info: RequestInfo = {next: '0'}
  showGoUpButton = false;

  private pageNum = 1;

  private query =  '';

  private hideScrollHeight = 200;

  private showScrollHeight = 500;
  


  constructor(private characterSvc: CharacterService, private route: ActivatedRoute,private router: Router) { 
    this.onUrlChanged()
  }

  ngOnInit(): void {
    this.getCharacter()
  }

  private onUrlChanged(){
    this.router.events.pipe(
      filter((event)=>
        event instanceof NavigationEnd
      )
    ).subscribe(()=>{
      this.characters = [];
        this.pageNum = 1;
        this.getCharacter();
    })
  }

  private getCharacter(): void{
    this.route.queryParams.pipe(take(1) ).subscribe(
      (params: ParamMap)=>{
        this.query = params['q'];
        this.getData();
      }
      
      
      );

  }

  
    private getData(): void{
      this.characterSvc.searchCharacters(this.query, this.pageNum).pipe(take(1)).subscribe(
        (res: any)=>{
          console.table(res);
          const {info,results} = res;
          this.characters = [...this.characters,...results];
          this.info = info;
  
        })
    }


}



