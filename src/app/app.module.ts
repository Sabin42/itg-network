import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';
import {ModalModule} from "ng2-modal";

import { AppComponent } from './app.component';
import { MaterialModule } from '@angular/material';
import { routing } from './app.routing';

import { LoginComponent } from './login/login.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ForumItemComponent } from './dashboard/forum-item/forum-item.component';
import { ForumListComponent } from './dashboard/forum-list/forum-list.component';
import { ForumFilterListComponent } from './dashboard/forum-filter-list/forum-filter-list.component';
import { FooterComponent } from './footer/footer.component';
import { ProfileInfoBasicComponent } from './profile/profile-info-basic/profile-info-basic.component';
import { ProfileInfoCompleteComponent } from './profile/profile-info-complete/profile-info-complete.component';
import { PersonalDetailsComponent } from './profile/profile-info-complete/personal-details/personal-details.component';
import { ActivitiesDetailsComponent } from './profile/profile-info-complete/activities-details/activities-details.component';
import { ProjectDetailsComponent } from './profile/profile-info-complete/project-details/project-details.component';
import { SettingsComponent } from './profile/profile-info-complete/settings/settings.component';
import { ProfileNavComponent } from './profile/profile-info-complete/profile-nav/profile-nav.component';
import { MembersComponent } from './members/members.component';
import { ModalComponent } from './home/modal/modal.component';
import { ForumPostComponent } from './dashboard/forum-post/forum-post.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavigationComponent,
    ProfileComponent,
    HomeComponent,
    DashboardComponent,
    ForumItemComponent,
    ForumListComponent,
    ForumFilterListComponent,
    FooterComponent,
    ProfileInfoBasicComponent,
    ProfileInfoCompleteComponent,
    PersonalDetailsComponent,
    ActivitiesDetailsComponent,
    ProjectDetailsComponent,
    SettingsComponent,
    ProfileNavComponent,
    MembersComponent,
    ModalComponent,
    ForumPostComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpModule,
    routing,
    ModalModule,
    MaterialModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
