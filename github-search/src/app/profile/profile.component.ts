import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../services/data-service.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  private profile: string;
  private username: string;
  private profile2: string;
  private repos: string;


  constructor(private profileInfo: DataServiceService) {
    this.profileInfo.getProfileInfo().subscribe(profile => {
      // console.log(profile);
      this.profile = profile;
    });

  }

  findProfile() {
    this.profileInfo.updateProfile(this.username).subscribe(profile2 => {
      console.log(profile2);
      this.profile2 = profile2;
    })
      this.profileInfo.getprofileRepos(this.username).subscribe(repos => {
        // console.log(repos)
        this.repos = repos;
    })

  }


  ngOnInit() {
  }

}
