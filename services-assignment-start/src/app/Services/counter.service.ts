import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {

  counter:number = 0;

  constructor() { }

  onCount(from,to,sourceCounter) {
    sourceCounter++;
    console.log(from + " -> " + to + " count: " + sourceCounter)
    return sourceCounter
  }

}
