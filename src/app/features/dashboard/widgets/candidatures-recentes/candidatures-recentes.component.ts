import { Component, signal } from '@angular/core';

@Component({
  selector: 'fdw-candidatures-recentes',
  imports: [],
  template: `
      <div class="w-full bg-white p-5 rounded-xl  drop-shadow-lg">
        <h3 class="text-[#008DDA] font-bold text-xl pb-3">Candidatures Récentes</h3>
        <table class="table-fixed w-full border-collapse border border-gray-400">
          <thead class="bg-[#0167A3] h-[40px] text-white ">
            <tr>
              <th class="border border-gray-300">Poste</th>
              <th class="border border-gray-300">Entreprise</th>
              <th class="border border-gray-300">Date</th>
              <th class="border border-gray-300">Statut</th>
            </tr>
          </thead>
          <tbody>
            @for(candidature of candidatures(); track candidature.id){
            <tr class="text-left h-[40px]">
              <td class="border border-gray-300 pl-3">{{ candidature.poste }}</td>
              <td class="border border-gray-300 pl-3">{{ candidature.entreprise }}</td>
              <td class="border border-gray-300 pl-3">{{ candidature.date }}</td>
              <td class="border border-gray-300 pl-3">{{ candidature.statut }}</td>
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
    },
  ]);
}
