import { Injectable } from '@angular/core';
//Importing link and My API Key
import { environment } from '../../environments/environment';
//Importing Http from angular
import { Http } from '@angular/http';
//Importing maping property from RXJS
import 'rxjs/add/operator/map';

@Injectable()
export class DataServiceService {
  //Declaring My username
  private username: string;

  constructor(private http: Http) {

  }

  //Function for geting repo info

  getprofileRepos(username: string) {

    this.username = username

    return this.http.get(environment.link + this.username + "/repos" +

    environment.clientId + environment.clientSecret).map(res => res.json());

  }

//Function for updating username with the one the user will enter

  updateProfile(username: string) {

    this.username = username;

    return this.http.get(environment.link + username + environment.clientId + environment.clientSecret)

      .map(res => res.json());

  }

}
