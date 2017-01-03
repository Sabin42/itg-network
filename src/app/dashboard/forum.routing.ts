import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ForumListComponent} from "./forum-list/forum-list.component";
import {ForumPostComponent} from "./forum-post/forum-post.component";


export const forumRoutes: Routes = [
  {
    path:'',
    component:ForumListComponent
  },
  {
    path: 'forum-post',
    component: ForumPostComponent
  }

];
