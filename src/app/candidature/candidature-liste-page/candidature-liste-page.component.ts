import { Component, computed, inject, Signal, signal } from '@angular/core';
import { ButtonComponent } from '../../shared/components/button/button.component';
import { CandidatureComponent } from '../candidature-card/candidature-card.component';
import { AnnoncesService } from '../../shared/services/annonces/annonces.service';
import { Annonce } from '../../shared/models/annonce';
import { FormSearchComponent } from '../form-search/form-search.component';
import { Router } from '@angular/router';

@Component({
  selector: 'fdw-candidatures',
  imports: [ButtonComponent, CandidatureComponent, FormSearchComponent],
  template: `
    <fdw-form-search
      [annonces]="annonces()"
      (formValue)="annonceSearch.set($event)"
      (resetForm)="annonceSearch.set({})"
    />
    <div
      class="grid grid-cols-1 md:grid-cols-2 gap-2 p-8 max-h-[48vh] md:max-h-[50vh] lg:max-h-[60vh] xl:max-h-[65vh] mt-5 overflow-y-auto bg-JobTracker-gray"
    >
      @for (annonce of annonceFilter(); track annonce.id) {
      <fdw-candidature (goToDetail)="annonceDetail($event)" [annonce]="annonce" />
      } @empty { @for (annonce of annonces(); track annonce.id) {
      <fdw-candidature (goToDetail)="annonceDetail($event)" [annonce]="annonce" />
      } }
    </div>
    <fdw-button />
  `,
})
export class CandidaturesComponent {
  protected readonly annoncesService = inject(AnnoncesService);
  protected readonly router = inject(Router);

  protected readonly annonces: Signal<Annonce[]> =
    this.annoncesService.getAll();

  annonceSearch = signal<FormSearchComponent['researchForm']['value']>({});

  annonceFilter = computed(() => {
    const search = this.annonceSearch();
    if (!search || Object.keys(search).length === 0) {
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
        annonce.entreprise.name === search.entreprise?.name ||
        annonce.entreprise.ville === search.entreprise?.ville ||
        annonce.salaire.toString() === search.salaire?.toString() ||
        annonce.status === search.status
    );
  });

  annonceDetail(id: number){
   return this.router.navigate(['/candidature', id])
  }
}
