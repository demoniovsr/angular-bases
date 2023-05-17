import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  public ArrayHeroNames : string[] = [ 'Batman', 'Spiderman', 'Superman', 'Hulk' ];
  public deleteHero? : string = '';
  //remove last hero from list
  removeLastHero():void{
     this.deleteHero = this.ArrayHeroNames.pop();
  }
}
