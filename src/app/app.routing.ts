import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import {PROFILE_INFO_ROUTES} from "./profile/profile-info-complete/profile-info.routes";
import {PersonalDetailsComponent} from "./profile/profile-info-complete/personal-details/personal-details.component";
import {ActivitiesDetailsComponent} from "./profile/profile-info-complete/activities-details/activities-details.component";
import {ProjectDetailsComponent} from "./profile/profile-info-complete/project-details/project-details.component";
import {SettingsComponent} from "./profile/profile-info-complete/settings/settings.component";
import {MembersComponent} from "./members/members.component";
import {ForumListComponent} from "./dashboard/forum-list/forum-list.component";
import {forumRoutes} from "./dashboard/forum.routing";

export const appRoutes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
      path:'home',
      component:HomeComponent
  },
  {
    path: 'profile',
    component: ProfileComponent,
    children: PROFILE_INFO_ROUTES
  },
  {
      path:'login',
      component:LoginComponent
  },
  {
      path:'members',
      component:MembersComponent
  },
  {
      path:'dashboard',
      component:DashboardComponent,
      children: forumRoutes
  },
  {
    path: '**',
    redirectTo: '/login',
    pathMatch: 'full'
  },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
