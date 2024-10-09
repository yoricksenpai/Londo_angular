import { Component, OnInit } from '@angular/core';
import { NgFor, NgClass } from '@angular/common';

enum Status {
  Yes = "Accepté(e)",
  No = "Refusé(e)",
  Wait = "En cours de traitement"
}

interface Candidature {
  intitule: string,
  date: string,
  statut: Status
}

@Component({
  selector: 'sgc-table',
  standalone: true,
  imports: [NgFor, NgClass],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss'
})
export class TableComponent implements OnInit {
  candidatures: Candidature[] = [];
  Status = Status;

  ngOnInit(): void {
    // Simuler un chargement asynchrone
    setTimeout(() => {
      this.candidatures = [
        { intitule: 'Chef de service département', date: '13/03/2018', statut: Status.Wait },
        { intitule: 'Contrôleur de Gestion', date: '11/09/2018', statut: Status.No },
        { intitule: 'Gestionnaire carrière', date: '08/06/2016', statut: Status.Yes }
      ];
    }, 1000);
  }
}
