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

  repos: object;

  performUserNotFound () {
    this.isUserFound = false;
  }

  performUserFound (userDetails) {
    this.isUserFound = true;
    this.user = userDetails.user
    this.repos = userDetails.repos.sort((a, b) => {
      return b.stargazers_count - a.stargazers_count;
    });
  }
}
