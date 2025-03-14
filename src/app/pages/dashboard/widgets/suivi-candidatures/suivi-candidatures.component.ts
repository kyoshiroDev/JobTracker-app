import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnnoncesService } from '../../../../shareds/services/annonces/annonces.service';
import { STATUS_COLOR } from '../../../../shareds/tokens/statusColor-token';

@Component({
  selector: 'fdw-suivi-candidatures',
  imports: [CommonModule],
  template: `
    <div class="flex justify-center gap-20 h-[90px] max-w-screen">
      @for(status of statusConfigs; track status.label){
      <div class="suivi-candidature-container">
        <h3 class="text-3xl">{{ status.label }}</h3>
        <p class="text-2xl" [class]="status.colorClassText">
          {{ annoncesServices.countByStatus().get(status.label)}}
        </p>
      </div>
      }
    </div>
  `,
})
export class SuiviCandidaturesComponent {
  protected readonly annoncesServices = inject(AnnoncesService);
  
  protected readonly statusConfigs = inject(STATUS_COLOR)
}
