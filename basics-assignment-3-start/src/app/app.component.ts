import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

buttonState = true;
counter = 0;
timestamps = [];
colors = [];

toggleButtonState() {
  this.buttonState === true ? this.buttonState = false : this.buttonState = true;

  this.timestamps.push(this.counter)
  this.colors.push(this.getColor())
  this.counter += 1
}

getColor() {
  return this.timestamps.length >= 5 ? "blue" : "white";
}

}
