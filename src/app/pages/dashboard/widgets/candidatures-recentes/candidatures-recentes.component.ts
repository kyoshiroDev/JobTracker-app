import { Component, signal } from '@angular/core';

@Component({
  selector: 'fdw-candidatures-recentes',
  imports: [],
  template: `
      <div class="table-container">
        <h3>Candidatures Récentes</h3>
        <table>
          <thead>
            <tr>
              <th>Poste</th>
              <th>Entreprise</th>
              <th>Date</th>
              <th>Statut</th>
            </tr>
          </thead>
          <tbody>
            @for(candidature of candidatures(); track candidature.id){
            <tr>
              <td>{{ candidature.poste }}</td>
              <td>{{ candidature.entreprise }}</td>
              <td>{{ candidature.date }}</td>
              <td>{{ candidature.statut }}</td>
            </tr>
            }
          </tbody>
        </table>
      </div>
  `,
})
export class CandidaturesRecentesComponent {
  protected readonly candidatures = signal([
    {
      id: 1,
      poste: 'développeur front-end Angular',
      entreprise: 'Google',
      date: '10/02/2025',
      statut: 'En attente',
    },
    {
      id: 2,
      poste: 'développeur front-end NextJs',
      entreprise: 'Facebook',
      date: '15/02/2025',
      statut: 'Entretien',
    },
    {
      id: 3,
      poste: 'développeur front-end',
      entreprise: 'Amazon',
      date: '20/02/2025',
      statut: 'En attente',
    },
    {
      id: 4,
      poste: 'développeur back-end NestJs',
      entreprise: 'Prestashop',
      date: '22/02/2025',
      statut: 'À relancer',
    },
    {
      id: 5,
      poste: 'développeur back-end Express',
      entreprise: 'Netflix',
      date: '28/02/2025',
      statut: 'Rejetées',
    }
  ]);
}
