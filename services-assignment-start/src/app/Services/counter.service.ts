import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {

  counter:number = 0;

  constructor() { }

  onCount(source) {
    this.counter++;
    console.log(source + ": " + this.counter)
  }

}
