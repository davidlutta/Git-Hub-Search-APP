import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes }from '@angular/router';

import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { DataServiceService } from './services/data-service.service';
import { ReposComponent } from './repos/repos.component';
import { NavbarComponent } from './navbar/navbar.component';

const appRoute:Routes = [
  {path:'', component:ProfileComponent},
  {path:'repos', component:ReposComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    ReposComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(appRoute)
  ],
  providers: [DataServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
