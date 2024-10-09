import { Component, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';
import { CardComponentComponent } from '../card-component/card-component.component';

interface JobOffer{
  type:string,
  title: string,
  localization:string

}

@Component({
  selector: 'sgc-second-part',
  standalone: true,
  imports: [CardComponentComponent, NgFor],
  templateUrl: './second-part.component.html',
  styleUrl: './second-part.component.scss'
})
export class SecondPartComponent implements OnInit {
  jobOffers: JobOffer[] = []
  ngOnInit(): void {
    //Simulation du chargement des offres d'empli depuis une api
    this.loadJobOffers()
  }
  loadJobOffers() {
    this.jobOffers = [
      { type: "CDD", title: "International Marketing Project Manager H/F", localization: "Brazzaville" },
      { type: "CDI", title: "Contrôleur de Gestion Sociale H/F", localization: "Pointe Noire" },
      { type: "CDD", title: "Conseiller Clientèle BtoB, H/F, CDD", localization: "Pointe Noire" },



    ]
  }
}
