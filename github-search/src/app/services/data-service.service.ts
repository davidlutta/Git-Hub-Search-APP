import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpModule } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DataServiceService {

  constructor(private http:Http) {
    this.username = "davidlutta";
   }

   getProfileInfo(){
     return this.http.get(environment.link + this.userName + environment.API)
     .map(res => res.json());
   }

}
