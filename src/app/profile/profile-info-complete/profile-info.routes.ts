import { Routes } from "@angular/router";
import { ActivitiesDetailsComponent } from "./activities-details/activities-details.component";
import { PersonalDetailsComponent } from "./personal-details/personal-details.component";
import { ProjectDetailsComponent } from "./project-details/project-details.component";
import { SettingsComponent } from "./settings/settings.component";

export const PROFILE_INFO_ROUTES : Routes = [
    {
        path: '',
        component: PersonalDetailsComponent
    },
    {
        path: 'activities',
        component: ActivitiesDetailsComponent
    },
    {
        path: 'projects',
        component: ProjectDetailsComponent
    },
    {
        path: 'settings',
        component: SettingsComponent
    }
];