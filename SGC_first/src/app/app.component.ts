import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {CandidatPageComponent} from './candidat-page/candidat-page.component'

@Component({
  selector: 'sgc-root',
  standalone: true,
  imports: [RouterOutlet, CandidatPageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'SGC_first';
}
