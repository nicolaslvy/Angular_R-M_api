import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { CharacterModule } from 'src/app/components/pages/character/character.module';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CharacterModule,
    CommonModule,
    HomeRoutingModule,
    
  ]
})
export class HomeModule { }
