import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  username:string="test"

  checkIfEmpty() {
    if (this.username=="") { return true; }
    else { return false; }
  }

  resetText() {
    this.username="";
  }
}
