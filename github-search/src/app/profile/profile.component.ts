import { Component, OnInit } from '@angular/core';
//Importing my service which has my function for getting data from github API
import { DataServiceService } from '../services/data-service.service';



@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  //Declaring my profile variable

  private profile: string;

  //Declaring my usernamevariable

  private username: string;

  //Declaring my updateProfile variable

  private profile2: string;


  constructor(private profileInfo: DataServiceService) {

    //Subscribing to the data obtained from my getProfileInfo function

    this.profileInfo.getProfileInfo().subscribe(profile => {

      this.profile = profile;

    });

  }

  //Subscribing to the data obtained from my updateProfile function that passes this.username to replace the original username

  findProfile() {

    this.profileInfo.updateProfile(this.username).subscribe(profile2 => {

      this.profile2 = profile2;

    })

  }


  ngOnInit() {

  }

}
