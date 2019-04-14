import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'github-challenge';

  notFoundMessage: string = 'User not found :(';

  isUserFound: boolean = true;

  performUserNotFound () {
    this.isUserFound = false;
  }
}
