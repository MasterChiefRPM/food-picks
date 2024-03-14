import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-question-2',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './question-2.component.html',
  styleUrl: './question-2.component.scss',
})
export class Question2Component {}
