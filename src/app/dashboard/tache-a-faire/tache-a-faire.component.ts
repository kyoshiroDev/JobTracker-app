import { Component, signal } from '@angular/core';

@Component({
  selector: 'fdw-tache-a-faire',
  imports: [],
  template: `
    <div class="liste-tache-container">
      <h3>Tâches à faire</h3>
      @for (tache of taches(); track tache.id) {
      <div class="tache-container" >
        <p>{{ tache.content }}</p>
      </div>
      }
    </div>
  `,
})
export class TacheAFaireComponent {
  protected readonly taches = signal([
    { id: 1, content: 'Refaire le CV' },
    { id: 2, content: 'Entretien facebook le 19/02/2025' },
    { id: 3, content: 'Prestashop à relancer' },
    { id: 4, content: 'Mettre à jour mon Linkedin' }
  ]);
}
