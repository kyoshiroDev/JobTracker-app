import { Component, computed, inject, Signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnnoncesService } from '../../../../shareds/services/annonces/annonces.service';
import { Annonce } from '../../../../shareds/models/annonce';
import { STATUS_COLOR } from '../../../../shareds/tokens/statusColor-token';

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
            <th>Localisation</th>
            <th>Statut</th>
          </tr>
        </thead>
        <tbody>
          @for(annonce of annonces(); track annonce.id){
          <tr>
            <td>{{ annonce.poste }}</td>
            <td>{{ annonce.entreprise }}</td>
            <td>{{ annonce.ville }}</td>
            <td [class]="statusColorClass(annonce.status)">{{ annonce.status }}</td>
          </tr>
          }
        </tbody>
      </table>
    </div>
  `,
})
export class CandidaturesRecentesComponent {
  private readonly annoncesService = inject(AnnoncesService);
  private readonly status = inject(STATUS_COLOR);

  protected readonly annonces: Signal<Annonce[]> =
    this.annoncesService.getAll();

    protected statusColorClass(status: string): string {
      const statusConfig = this.status.find(item => item.label === status);
      return statusConfig?.colorClassText || 'text-JobTracker-blue';
    }
}
