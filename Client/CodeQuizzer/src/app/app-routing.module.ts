import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { TopicComponent } from './pages/topic/topic.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { QuizComponent } from './pages/quiz/quiz.component';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';

const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      { path: '', component: WelcomeComponent },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'topic', component: TopicComponent },
      { path: 'profile', component: ProfileComponent },
      { path: 'quiz', component: QuizComponent },
    ]
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
