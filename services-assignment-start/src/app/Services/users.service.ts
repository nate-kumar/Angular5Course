import { CounterService } from './counter.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  activeUsers = ['Max', 'Anna'];
  inactiveUsers = ['Chris', 'Manu'];
  activeCount:number = 0;
  inactiveCount:number = 0;

  constructor(private counterService:CounterService) { }

  onSetToInactive(id: number) {
    this.inactiveUsers.push(this.activeUsers[id]);
    this.activeUsers.splice(id, 1);
    this.inactiveCount = this.counterService.onCount("Active","Inactive",this.inactiveCount);
  }

  onSetToActive(id: number) {
    this.activeUsers.push(this.inactiveUsers[id]);
    this.inactiveUsers.splice(id, 1);
    this.activeCount = this.counterService.onCount("Inactive","Active",this.activeCount);
  }
}
