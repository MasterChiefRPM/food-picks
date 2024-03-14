import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-question-1',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './question-1.component.html',
  styleUrl: './question-1.component.scss',
})
export class Question1Component {}
