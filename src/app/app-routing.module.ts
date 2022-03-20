import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { RequestComponent } from './pages/user/user-dashboard/request/request.component';
import { SignupComponent } from './pages/signup/signup.component';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { AnalystDashboardComponent } from './pages/analyst/analyst-dashboard/analyst-dashboard.component';
import { UserDashboardComponent } from './pages/user/user-dashboard/user-dashboard.component';
import { AnalystGuard } from './services/analyst.guard';
import { AdminGuard } from './services/admin.guard';
import { UserGuard } from './services/user.guard';
import { ProfileComponent } from './pages/profile/profile.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent,
    pathMatch:"full"
  },
  {
    path:"signup",
    component:SignupComponent,
    pathMatch:"full"
  },
  {
    path:"request",
    component:RequestComponent,
    pathMatch:"full"
  },
  {
    path:"login",
    component:LoginComponent,
    pathMatch:"full"
  },
  {
    path:"admin",
    component:DashboardComponent,
   
    canActivate:[AdminGuard],
    children: [
     
      {
        path: 'profile',
        component: ProfileComponent,
      }
    ]

  },
  {
    path:"analyst",
    component:AnalystDashboardComponent,
    pathMatch:"full",
    canActivate:[AnalystGuard],
  },
  {
    path:"user",
    component:UserDashboardComponent,
    pathMatch:"full",
    canActivate:[UserGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
