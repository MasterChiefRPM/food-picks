import { Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { Question1Component } from './question-1/question-1.component';
import { Question2Component } from './question-2/question-2.component';
import { Question3Component } from './question-3/question-3.component';
import { Question4Component } from './question-4/question-4.component';
import { Question5Component } from './question-5/question-5.component';
import { ResultsPageComponent } from './results-page/results-page.component';

export const routes: Routes = [
  { path: 'home-page', component: HomePageComponent },
  { path: 'question-1', component: Question1Component },
  { path: 'question-2', component: Question2Component },
  { path: 'question-3', component: Question3Component },
  { path: 'question-4', component: Question4Component },
  { path: 'question-5', component: Question5Component },
  { path: 'results-page', component: ResultsPageComponent},
  { path: 'home-page', component:HomePageComponent}
];
