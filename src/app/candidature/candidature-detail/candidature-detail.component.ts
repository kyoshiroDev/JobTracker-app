import { Component, computed, inject, input, Signal } from '@angular/core';
import { AnnoncesService } from '../../shared/services/annonces/annonces.service';
import { Annonce } from '../../shared/models/annonce';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'fdw-candidature-detail',
  imports: [],
  template: `
    @if (annonce()) { 
      <p>{{ annonce()?.poste }}</p> 
    } @else {
      <p>Chargement de l'annonce...</p>
  }
  `,
})
export class CandidatureDetailComponent {
  readonly annonceService = inject(AnnoncesService);
  readonly route = inject(ActivatedRoute);

  readonly id: Signal<string | null> = computed(() =>
    this.route.snapshot.paramMap.get('id')
  );

  readonly annonces: Signal<Annonce[]> = this.annonceService.getAll();

  readonly annonce: Signal<Annonce | undefined> = computed(() => {
    if(!this.id()){
      return undefined;
    }
    return this.annonces().find(
      (annonce) => annonce.id.toString() === this.id()
    );
  });
}
