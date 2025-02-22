import { Component, signal } from '@angular/core';

interface suiviCandidatures {
  id: number;
  title: string;
  number: number;
}

@Component({
  selector: 'fdw-suivi-candidatures',
  imports: [],
  template: `
    <div class="flex justify-center gap-20 h-[90px] max-w-screen">
      @for(suiviCandidature of suiviCandidatures(); track suiviCandidature.id){
      <div class="suivi-candidature-container">
        <h3 class="text-3xl">{{ suiviCandidature.title }}</h3>
        <p class="text-2xl">{{ suiviCandidature.number }}</p>
      </div>
      }
    </div>
  `,
})
export class SuiviCandidaturesComponent {
  protected readonly suiviCandidatures = signal<suiviCandidatures[]>([
    { id: 1, title: 'Candidatures', number: 12 },
    { id: 2, title: 'Entretiens', number: 4 },
    { id: 3, title: 'Offres à relancer', number: 6 },
    { id: 4, title: 'Rejetées', number: 2 },
  ]);
}
