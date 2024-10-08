import { Component } from '@angular/core';
import { CardComponentComponent } from '../card-component/card-component.component';

@Component({
  selector: 'sgc-second-part',
  standalone: true,
  imports: [CardComponentComponent],
  templateUrl: './second-part.component.html',
  styleUrl: './second-part.component.scss'
})
export class SecondPartComponent {

}
