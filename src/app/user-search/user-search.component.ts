import { Component, EventEmitter, Output } from '@angular/core';

import { UserSearchService } from './user-search.service';

@Component({
  selector: 'user-search',
  templateUrl: './user-search.component.html',
  styleUrls: ['./user-search.component.css'],
  providers: [UserSearchService]
})
export class UserSearchComponent {

  username: string = '';

  userSearchService: UserSearchService;

  user: object;

  @Output() userNotFound = new EventEmitter();

  @Output() userFound = new EventEmitter();

  constructor (userSearchService: UserSearchService) {
    this.userSearchService = userSearchService;
  }

  searchUser () {
    this.userSearchService.getUserDetails(this.username)
    .subscribe(response => {
      this.user = response;
      this.searchUserRepositories();
    },
    error => {
      this.userNotFound.emit();
    });
  }

  searchUserRepositories () {
    this.userSearchService.getUserRepositories(this.username)
    .subscribe(response => {
      const userDetailAndRepos = {
        user: this.user,
        repos: response
      };

      this.userFound.emit(userDetailAndRepos);
    },
    error => {
      // TODO: perform something with the error response.
    });
  }
}
