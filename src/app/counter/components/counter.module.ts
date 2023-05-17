import { NgModule } from "@angular/core";
//import { CounterComponent } from './counter/components/counter/counter.compoent';
import { CounterComponent } from "./counter/counter.component";
@NgModule({
  declarations : [
    CounterComponent
  ],
  exports :[
    CounterComponent
  ]
})
export class CounterModule{

}
