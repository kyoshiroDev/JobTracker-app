import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

interface suiviCandidatures {
  id: number;
  title: string;
  number: number;
}

@Component({
  selector: 'fdw-suivi-candidatures',
  imports: [CommonModule],
  template: `
    <div class="flex justify-center gap-20 h-[90px] max-w-screen">
      @for(suiviCandidature of suiviCandidatures(); track suiviCandidature.id){
      <div class="suivi-candidature-container">
        <h3 class="text-3xl">{{ suiviCandidature.title }}</h3>
        <p class="text-2xl" [ngClass]="getTextColor(suiviCandidature.title)">{{ suiviCandidature.number }}</p>
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

  getTextColor(title: string): string {
    switch (title) {
      case 'Candidatures':
        return 'text-JobTracker-blue'; // Bleu pour les candidatures
      case 'Entretiens':
        return 'text-green-500'; // Vert pour les entretiens
      case 'Offres à relancer':
        return 'text-yellow-500'; // Jaune pour relance
      case 'Rejetées':
        return 'text-red-500'; // Rouge pour rejetées
      default:
        return 'text-JobTracker-blue'; // Couleur par défaut
    }
  }
}
