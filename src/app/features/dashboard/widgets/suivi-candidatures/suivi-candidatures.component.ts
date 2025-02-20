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
    <div class="flex justify-center gap-20 h-[90px] max-w-screen mt-5">
      @for(suiviCandidature of suiviCandidatures(); track suiviCandidature.id){
      <div class="flex flex-col bg-white text-[#008DDA] font-semibold w-[300px] justify-center items-center gap-2 rounded-2xl drop-shadow-lg">
        <h2 class="text-2xl">{{ suiviCandidature.title }}</h2>
        <p class="text-3xl">{{ suiviCandidature.number }}</p>
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
