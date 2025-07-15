import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { WelcomePageComponent } from './pages/welcome-page/welcome-page.component';
import { LoginPageComponent } from './pages/auth/login-page/login-page.component';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';
import { SignupPageComponent } from './pages/auth/signup-page/signup-page.component';
import { ResetPasswordPageComponent } from './pages/auth/reset-password-page/reset-password-page.component';

import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';

const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      { path: '', component: WelcomePageComponent },
      { path: 'login', component: WelcomePageComponent }, // Redirect to welcome page for login
      { path: 'dashboard', component: DashboardPageComponent },
      { path: 'signup', component: SignupPageComponent },
      { path: 'reset-password', component: ResetPasswordPageComponent }
    ]
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
