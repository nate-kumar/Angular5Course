import { CounterService } from './../Services/counter.service';
import { UsersService } from './../Services/users.service';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css'],
  providers: [CounterService]
})
export class ActiveUsersComponent {
  users: string[];

  constructor(private usersService:UsersService, private counterServiceActive:CounterService) {

  }

  ngOnInit() {
    this.users = this.usersService.activeUsers
  }

  onSetToInactive(id: number) {
    this.usersService.onSetToInactive(id);
  }
}
