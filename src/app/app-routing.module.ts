import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from '../app/pages/dashboard/dashboard.component';
import { DetailsComponent } from './pages/details/details.component';
import { RegisterComponent } from './pages/register/register.component';


const routes: Routes = [
  {
    path: "",
    component: DashboardComponent
  },  {
    path: "register",
    component: RegisterComponent
  },{
    path: "user/:userId",
    component: DetailsComponent
  },
  { path: '**', redirectTo: '' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
