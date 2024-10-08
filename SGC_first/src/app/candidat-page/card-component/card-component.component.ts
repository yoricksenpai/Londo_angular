import { Component, Input } from '@angular/core';

@Component({
  selector: 'sgc-card-component',
  standalone: true,
  imports: [],
  templateUrl: './card-component.component.html',
  styleUrl: './card-component.component.scss'
})
export class CardComponentComponent {
  @Input() type: string = '';
  @Input() title: string = '';
  @Input() localization: string = '';
}
