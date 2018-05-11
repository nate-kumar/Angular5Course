import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-even-panel',
  templateUrl: './even-panel.component.html',
  styleUrls: ['./even-panel.component.css']
})
export class EvenPanelComponent implements OnInit {

  @Input() number:number

  constructor() { }

  ngOnInit() {
  }

}
