import { computed, Injectable, signal, Signal } from '@angular/core';
import { Annonce } from '../../models/annonce';
import { StatusConfig } from '../../models/statusConfig.model';

@Injectable({
  providedIn: 'root',
})
export class AnnoncesService {
  protected readonly annonces = signal<Annonce[]>([
    {
      id: 1,
      poste: 'développeur front-end Angular',
      entreprise: 'Google',
      ville: 'New York City',
      content: '',
      salaire: 35000,
      annonceLink: '',
      status: 'En attente',
      createdAT: new Date(),
    },
    {
      id: 2,
      poste: 'développeur front-end NextJs',
      entreprise: 'Facebook',
      ville: 'New York City',
      content: '',
      salaire: 40000,
      annonceLink: '',
      status: 'Entretien',
      createdAT: new Date(),
    },
    {
      id: 3,
      poste: 'développeur front-end',
      entreprise: 'Amazon',
      ville: 'New York City',
      content: '',
      salaire: 50000,
      annonceLink: '',
      status: 'En attente',
      createdAT: new Date(),
    },
    {
      id: 4,
      poste: 'développeur back-end NestJs',
      entreprise: 'Prestashop',
      ville: 'New York City',
      content: '',
      salaire: 45000,
      annonceLink: '',
      status: 'À relancer',
      createdAT: new Date(),
    },
    {
      id: 5,
      poste: 'développeur back-end Express',
      entreprise: 'Netflix',
      ville: 'New York City',
      content: '',
      salaire: 55000,
      annonceLink: '',
      status: 'Rejetée',
      createdAT: new Date(),
    },
  ]);

  getAll(): Signal<Annonce[]> {
    return this.annonces.asReadonly();
  }

  readonly countByStatus = computed(() => {
    return this.annonces().reduce((acc, annonce) => {
      const count = acc.get(annonce.status) || 0;
      acc.set(annonce.status, count + 1);
      return acc;
    }, new Map<string, number>());
  });
}
