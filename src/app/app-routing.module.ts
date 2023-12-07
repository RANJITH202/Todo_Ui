import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Auth/login/login.component';
import { PageNotFoundComponent } from './ErrorPage/page-not-found/page-not-found.component';
import { DashboardComponent } from './Dashboard/dashboard/dashboard.component';
import { FullComponentComponent } from './Dashboard/full-component/full-component.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '',
    component: FullComponentComponent
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
