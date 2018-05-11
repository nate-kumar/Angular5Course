import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-odd-panel',
  templateUrl: './odd-panel.component.html',
  styleUrls: ['./odd-panel.component.css']
})
export class OddPanelComponent implements OnInit {

  @Input() number:number

  constructor() { }

  ngOnInit() {
  }

}
