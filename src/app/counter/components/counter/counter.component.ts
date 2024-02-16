import { Component} from '@angular/core';


@Component({
  selector: 'app-counter',
  template: `<h3>

  counter: {{counter}}

</h3>

<button (click)="increaseBy(+1)" >+1</button>
<button (click)="reset()">Reset</button>
<button (click)="increaseBy(-1)">-1</button> `
})

export class CounterComponent{
  constructor() { }
  public title: string = 'Mi primera App de Angular';

  public counter: number = 10;

  public increaseBy( value: number ):void {
    this.counter += value;
  }
  public reset(): void {
    this.counter = 10;
  }
}
