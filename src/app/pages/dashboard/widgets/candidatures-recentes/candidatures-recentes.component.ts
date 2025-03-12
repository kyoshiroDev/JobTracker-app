import { Component, inject, Signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnnoncesService } from '../../../../shareds/services/annonces/annonces.service';
import { Annonce } from '../../../../shareds/models/annonce';

@Component({
  selector: 'fdw-candidatures-recentes',
  imports: [CommonModule],
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
            @for(annonce of annonces(); track annonce.id){
            <tr>
              <td>{{ annonce.poste }}</td>
              <td>{{ annonce.entreprise }}</td>
              <td>{{ annonce.createdAT | date:'dd/MM/yyyy' }}</td>
              <td>{{ annonce.status }}</td>
            </tr>
            }
          </tbody>
        </table>
      </div>
  `,
})
export class CandidaturesRecentesComponent {
  private readonly annoncesService = inject(AnnoncesService)

  protected readonly annonces: Signal<Annonce[]> = this.annoncesService.getAll()
}
