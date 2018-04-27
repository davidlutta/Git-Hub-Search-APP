import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../services/data-service.service'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  private profile: any[];



  constructor(private profileInfo:DataServiceService) {
    this.profileService.getProfileInfo().subscribe(profile =>{
      console.log(profile);
      this.profile = profile;
  }

  ngOnInit() {
  }

}
