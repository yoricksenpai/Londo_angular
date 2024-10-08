import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContactPartComponent } from './contact-part/contact-part.component';
import { TablePartComponent } from './table-part/table-part.component';
import { SecondPartComponent } from './second-part/second-part.component';

@Component({
  selector: 'sgc-candidat-page',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, ContactPartComponent, TablePartComponent, SecondPartComponent],
  templateUrl: './candidat-page.component.html',
  styleUrl: './candidat-page.component.scss'
})
export class CandidatPageComponent {

}
