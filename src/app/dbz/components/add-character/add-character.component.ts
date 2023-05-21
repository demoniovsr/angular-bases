import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-add-character',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.css']
})
export class AddCharacterComponent {
  public character : Character = {
    name : '',
    power : 0,
    id : ''
  }

  @Output()
  public addEventEmitter : EventEmitter<Character> = new EventEmitter();

  emitCharacter() : void{
    console.log(this.character);

    if(this.character.name.length === 0)return;

    this.addEventEmitter.emit(this.character);

    //this.character.name = '';
    //this.character.power = 0;
    this.character = { name : '', power : 0, id: ''};
  }


}
