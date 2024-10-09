import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CandidatPageComponent } from './candidat-page/candidat-page.component';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'sgc-root',
  standalone: true,
  imports: [RouterOutlet, CandidatPageComponent, NgOptimizedImage],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'SGC_first';
}
