import { CounterService } from './../Services/counter.service';
import { UsersService } from './../Services/users.service';
import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css'],
  providers: [CounterService]
})
export class InactiveUsersComponent {
  users: string[];
  // @Output() userSetToActive = new EventEmitter<number>();

  constructor(private usersService:UsersService, private counterServiceInactive:CounterService) {

  }

  ngOnInit() {
    this.users = this.usersService.inactiveUsers
  }

  onSetToActive(id: number) {
    this.usersService.onSetToActive(id);
    this.counterServiceInactive.onCount("Active->inactive count");
  }
}
