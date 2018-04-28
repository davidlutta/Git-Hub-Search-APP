import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DataServiceService {
  private username: string;

  constructor(private http: Http) {
    this.username = "davidlutta";
  }

  getProfileInfo() {
    console.log("service Works")
    return this.http.get(environment.link + this.username + environment.API)
      .map(res => res.json());
  }
  getprofileRepos(username: string) {
    this.username = username
    return this.http.get(environment.link + this.username + "/repos" + environment.API).map(res => res.json());
  }

  updateProfile(username: string) {
    this.username = username;
    return this.http.get(environment.link + username + environment.API)
      .map(res => res.json());
  }

}
