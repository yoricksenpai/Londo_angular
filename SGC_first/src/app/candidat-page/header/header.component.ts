import { Component } from '@angular/core';
import { TopHeaderComponent } from './top-header/top-header.component';
import { NavHeaderComponent } from './nav-header/nav-header.component';

@Component({
  selector: 'sgc-header',
  standalone: true,
  imports: [TopHeaderComponent, NavHeaderComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

}
