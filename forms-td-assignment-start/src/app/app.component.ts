import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from './user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  user: User;
  submitted = false;

  @ViewChild('f') form: NgForm;

  onSubmit() {
    this.submitted = true;
    console.log(this.form);
    const email: string = this.form.value.email;
    const password: string = this.form.value.password;
    const subscription: string = this.form.value.subscription;
    this.user = new User(email, subscription, password);
  }

}
