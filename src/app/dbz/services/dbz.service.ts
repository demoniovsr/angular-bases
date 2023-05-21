import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuid } from 'uuid';
@Injectable({
  providedIn: 'root'
})
export class DbzService {

  constructor() { }


  public characters : Character[] = [
    {
      id : uuid(),
      name : "Krillin",
      power : 1000
    },
    {
      id : uuid(),
      name : "Goku",
      power : 9500
    },
    {
      id : uuid(),
      name : "Vegeta",
      power : 7500
    },
    {
      id : uuid(),
      name : "Yamsha",
      power : 1500
    },
    {
      id : uuid(),
      name : "Picoro",
      power : 5500
    }
  ];

  addCharacter(character : Character) : void
  {
    //debugger;
    //console.log('MainPage');
    //console.log(character);

    //const newCharacter : Character = { id: uuid(),...character};
    const newCharacter : Character =
    {
      name : character.name,
      power : character.power,
      id : uuid()
    };
    this.characters.push(newCharacter);
  }

  onDeleteCharacterById( index: number)
  {
    this.characters.splice(index,1);
  }


  deleteCharacterById(id:string) :void
  {
    this.characters = this.characters.filter( character => character.id !== id);
  }
}


