import { Routes } from '@angular/router';
import { Question1Component } from './question-1/question-1.component';
import { HomePageComponent } from './home-page/home-page.component';

export const routes: Routes = [
    {path: '', component: HomePageComponent},
    {path: 'question-1', component: Question1Component}];