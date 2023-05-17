import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {

  public name : string = "Bruce Waine";
  public age : number = 40;

  get capitalizedName():string{
    return this.name.toUpperCase();
  }

  getHeroDescription() : string
  {
    return `${ this.name } - ${this.age}`;
  }

  changeHeroe(pName : string) : void{
      this.name = pName;
  }

  changeAge(pAge : number) : void{
    this.age = pAge;
  }

  resetForm() : void {
    this.name = "Bruce Waine";
    this.age = 40;
  }
}
