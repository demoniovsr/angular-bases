import { Component, Input, EventEmitter, Output } from '@angular/core';

import { v4 as uuid } from 'uuid';

import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  @Input()
  public characterList : Character[] = [
    {
      name : 'Trunks',
      power: 10,
      id : uuid()
    }

  ];
  @Output()
  //onDelete : EventEmitter<number> = new EventEmitter();
  deleteEventEmitter : EventEmitter<string> = new EventEmitter();


 /*  onDeleteCharacter(index : number):void{
    //TODO: Emitir el id del personaje
    //console.log(index);
    this.onDelete.emit(index);
  } */
  onDeleteCharacter(id : string):void{
    //TODO: Emitir el id del personaje
    //console.log(index);
    this.deleteEventEmitter.emit(id);
  }

}


