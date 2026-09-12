import { Routes } from '@angular/router';

import { LoginComponent } from './features/auth/pages/login/login.component';
import { HomeComponent } from './features/home/pages/home/home.component';
import { FutCreateComponent } from './features/fut/pages/fut-create/fut-create.component';
import { FutListComponent } from './features/fut/pages/fut-list/fut-list.component';
import { FutDetailComponent } from './features/fut/pages/fut-detail/fut-detail.component';
import { TrackingComponent } from './features/tracking/pages/tracking/tracking.component';
import { ReportsComponent } from './features/reports/pages/reports/reports.component';
import { UserListComponent } from './features/users/pages/user-list/user-list.component';

export const routes: Routes = [

  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },

  {
    path: 'login',
    component: LoginComponent
  },

  {
    path: 'home',
    component: HomeComponent
  },

  {
    path: 'fut',
    component: FutListComponent
  },

  {
    path: 'fut/nuevo',
    component: FutCreateComponent
  },

  {
    path: 'fut/:id',
    component: FutDetailComponent
  },

  {
    path: 'seguimiento',
    component: TrackingComponent
  },

  {
    path: 'reportes',
    component: ReportsComponent
  },

  {
    path: 'usuarios',
    component: UserListComponent
  },

  {
    path: '**',
    redirectTo: 'login'
  }

];
