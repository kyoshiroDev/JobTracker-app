import { Component, inject, Signal, signal } from '@angular/core';
import { ButtonComponent } from '../../shareds/components/button/button.component';
import { CandidatureComponent } from './components/candidature/candidature.component';
import { AnnoncesService } from '../../shareds/services/annonces/annonces.service';
import { Annonce } from '../../shareds/models/annonce';

@Component({
  selector: 'fdw-candidatures',
  imports: [ButtonComponent, CandidatureComponent],
  template: `
    <div class="grid grid-cols-2 gap-6 p-8">
  @for (annonce of annonces(); track annonce.id) {
    <fdw-candidature [annonce]="annonce"/>
  }
    </div>
    <fdw-button />
  `,
})
export class CandidaturesComponent {
  protected readonly annoncesService = inject(AnnoncesService)

  protected readonly annonces: Signal<Annonce[]> = this.annoncesService.getAll()
}
