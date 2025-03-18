import { Component, computed, inject, Signal, signal } from '@angular/core';
import { ButtonComponent } from '../../shareds/components/button/button.component';
import { CandidatureComponent } from './components/candidature/candidature.component';
import { AnnoncesService } from '../../shareds/services/annonces/annonces.service';
import { FormSearchComponent } from './components/form-search/form-search.component';
import { Annonce } from '../../shareds/models/annonce';

@Component({
  selector: 'fdw-candidatures',
  imports: [ButtonComponent, CandidatureComponent, FormSearchComponent],
  template: `
    <fdw-form-search
      [annonces]="annonces()"
      (formValue)="annonceSearch.set($event)"
    />
    <div class="grid grid-cols-2 gap-6 p-8">
      @for (annonce of annonceFilter(); track annonce.id) {
      <fdw-candidature [annonce]="annonce" />
      } @empty { @for (annonce of annonces(); track annonce.id) {
      <fdw-candidature [annonce]="annonce" />
      } }
    </div>
    <fdw-button />
  `,
})
export class CandidaturesComponent {
  protected readonly annoncesService = inject(AnnoncesService);
  protected readonly annonces: Signal<Annonce[]> =
    this.annoncesService.getAll();

  annonceSearch = signal<FormSearchComponent['researchForm']['value']>({});

  annonceFilter = computed(() => {
    const search = this.annonceSearch();
    if (search === null || '') {
      return this.annonces();
    }
    return this.annonces().filter(
      (annonce) =>
        annonce.poste
          .toLocaleLowerCase()
          .trim()
          .replaceAll(' ', '')
          .replaceAll('-', '')
          .replaceAll('é', 'e') ===
          search.poste
            ?.toLocaleLowerCase()
            .trim()
            .replaceAll(' ', '')
            .replaceAll('-', '') ||
        annonce.entreprise === search.entreprise ||
        annonce.ville === search.ville ||
        annonce.salaire.toString() === search.salaire?.toString() ||
        annonce.status === search.status
    );
  });
}
