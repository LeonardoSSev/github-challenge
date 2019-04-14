import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UserSearchService {

  httpClient: HttpClient;

  baseUrl: string = 'https://api.github.com/users/';

  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient;
  }

  getUserDetails (username: string) {
    return this.httpClient.get(`${this.baseUrl}${username}`);
  }

  getUserRepositories (username: string) {
    return this.httpClient.get(`${this.baseUrl}${username}/repos`);
  }
}
