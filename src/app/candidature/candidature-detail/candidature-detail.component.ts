import { CommonModule } from '@angular/common';
import { Component, computed, inject, input, Signal } from '@angular/core';
import { Annonce } from '../../shared/models/annonce';
import { AnnoncesService } from '../../shared/services/annonces/annonces.service';

import { Router } from '@angular/router';
import { CandidatureDetailContentComponent } from './candidature-detail-content/candidature-details-content.component';
import { CandidatureDetailFooterComponent } from './candidature-detail-footer/candidature-detail-footer.component';
import { CandidatureDetailHeaderComponent } from './candidature-detail-header/candidature-detail-header.component';

@Component({
  selector: 'fdw-candidature-detail',
  imports: [
    CommonModule,
    CandidatureDetailHeaderComponent,
    CandidatureDetailContentComponent,
    CandidatureDetailFooterComponent,
  ],
  template: `
    <div class="flex flex-col max-h-content justify-center items-center">
      @if (annonce()) {
      <div
        class="w-4xl mx-auto bg-JobTracker-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl my-6"
      >
        <!-- En-tête de l'annonce -->
        <fdw-candidature-detail-header
          (onClickReturn)="returnListeAnnonce()"
          class="text-JobTracker-white"
          [annonce]="annonce()"
        />

        <!-- Contenu de l'annonce -->
        <div class="p-6 overflow-y-scroll max-h-[460px]">
          <fdw-candidature-detail-content [annonce]="annonce()" />
        </div>
        <!-- Footer de l'annonce -->
        <fdw-candidature-detail-footer [annonce]="annonce()" />
      </div>
      } @else {
      <p>Chargement de l'annonce...</p>
      }
    </div>
  `,
})
export class CandidatureDetailComponent {
  readonly annonceService = inject(AnnoncesService);
  readonly router = inject(Router);
  readonly id = input<string | null>();

  readonly annonces: Signal<Annonce[]> = this.annonceService.getAll();

  readonly annonce: Signal<Annonce | any> = computed(() => {
    if (!this.id()) {
      return null;
    }
    return this.annonces().find(
      (annonce) => annonce.id.toString() === this.id()
    );
  });

  returnListeAnnonce() {
    this.router.navigate(['/candidatures']);
  }
}
