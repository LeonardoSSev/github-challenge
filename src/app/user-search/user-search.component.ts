import { Component } from '@angular/core';

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

  constructor (userSearchService: UserSearchService) {
    this.userSearchService = userSearchService;
  }

  searchUser () {
    this.userSearchService.getUserDetails(this.username)
    .subscribe(response => {
      // TODO: perform something with the response.
    },
    error => {
      // TODO: perform something with the error response.
    });
  }
}
