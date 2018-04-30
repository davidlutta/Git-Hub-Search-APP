import { Component, OnInit } from '@angular/core';
// Importing links and API from my environment folder
import { environment } from '../../environments/environment';
// Importing Http from angular
import { Http } from '@angular/http';
// Importing maping property from RXJS
import 'rxjs/add/operator/map';
//Importing my service which has my function for getting data from github API
import { DataServiceService } from '../services/data-service.service';

@Component({
  selector: 'app-repos',
  templateUrl: './repos.component.html',
  styleUrls: ['./repos.component.css']
})
export class ReposComponent implements OnInit {
  //Declaring my repo variable

  private repos: string;

  //Declaring my username variable

  private username: string;


  constructor(private profileInfo: DataServiceService) { }

  //Subscribing to the data obtained from my getprofileRepos function

  findProfile() {

    //Subscribing to the data obtained from my getprofileRepos function

      this.profileInfo.getprofileRepos(this.username).subscribe(repos => {

        this.repos = repos;

    })

  }


  ngOnInit() {
  }

}
