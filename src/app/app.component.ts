import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  notFoundMessage: string = 'User not found :(';

  isUserFound: boolean;

  user: object;

  performUserNotFound () {
    this.isUserFound = false;
  }

  performUserFound (user) {
    this.isUserFound = true;
    this.user = user
  }
}
