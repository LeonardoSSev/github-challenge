import { Component } from '@angular/core';

@Component({
  selector: 'user-search',
  templateUrl: './user-search.component.html',
  styleUrls: ['./user-search.component.css']
})
export class UserSearchComponent {

  username: string = '';

  searchUser () {
    //TODO: fetch user information.
  }
}
