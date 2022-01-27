import { Component,Input, ChangeDetectionStrategy } from "@angular/core";
import { Character } from "@app/shared/interfaces/characters.interface";

@Component({
    selector: 'app-character',
    template: `
    <div class="card m-3 p-0 ">
    <div>
        <img class="card-img-top" [src]="character.image" alt="">
    </div>
    <div class="card-body w-100 p-0">
        <a [routerLink]="['/character-details', character.id]">
            <h5 class="card-title m-0">{{character.name | slice: 0:13}}</h5>
        </a>
        <ul class="list-group flush bg-dark m-0">
            <li class="list-group-item p-0 ">status: {{character.status}}</li>
            <li class="list-group-item p-0 ">gender: {{character.gender}}</li>
            <li class="list-group-item p-0 ">species: {{character.species}}</li>
        </ul>
        <button class="btn btn-primary" [routerLink]="['/character-details', character.id]">show details</button>
    </div>
</div>`,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CharacterComponent{
    @Input() character:Character;
}