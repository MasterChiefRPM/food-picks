import { Routes } from '@angular/router';
import { Question1Component } from './question-1/question-1.component';
import { HomePageComponent } from './home-page/home-page.component';
import { Question2Component } from './question-2/question-2.component';
import { Question3Component } from './question-3/question-3.component';

export const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'question-1', component: Question1Component },
  { path: 'question-2', component: Question2Component },
  { path: 'question-3', component: Question3Component }
];
