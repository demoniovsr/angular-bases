import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { DbzService } from '../services/dbz.service';


@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPagesComponent implements OnInit {
  constructor(private dbzService:DbzService) { }

  @Output()
  public deleteEventEmitter : EventEmitter<number> = new EventEmitter();

  get getCharacters(): Character[]{
    return [...this.dbzService.characters];
  }

  deleteCharacater(id:string):void{
    this.dbzService.deleteCharacterById(id);
  }

  addCharacter(character: Character):void{
    this.dbzService.addCharacter(character);
  }


  ngOnInit() { }
}
