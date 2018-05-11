import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

  counter:number = 0;
  total;
  @Output() counterEvent = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  onPressStart(){
    var that = this;

    this.total = setInterval(function() 
      {
        that.counter+=1
        that.counterEvent.emit(that.counter)
        console.log("counter counting " + that.counter)
      },1000);
  }

  onPressStop(){
      clearInterval(this.total)
      this.counter = 0
      this.counterEvent.emit(this.counter)
      console.log("counter stopped " + this.counter)
  }

}
