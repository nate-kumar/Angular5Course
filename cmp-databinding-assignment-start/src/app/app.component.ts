import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
counts = [];

receiveCounter($event){
  if ($event > 0) {
    this.counts.push($event)
  }
  else
  {
    this.counts=[];
  }
    console.log(this.counts)
}

}
