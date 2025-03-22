import { computed, Injectable, signal, Signal } from '@angular/core';
import { Annonce } from '../../models/annonce';

@Injectable({
  providedIn: 'root',
})
export class AnnoncesService {
  protected readonly annonces = signal<Annonce[]>([
    {
      id: 1,
      poste: 'développeur front-end Angular',
      entreprise: {
        name: 'Google',
        ville: 'Lyon',
        phone: 128525,
        email: 'société@gmail.com',
      },
      content: {
        aPropos: '',
        descriptif: [''],
        competence: [''],
        avantage: [''],
      },
      typeContrat: 'CDI',
      modeTravail: 'fullremote',
      salaire: 35000,
      annonceLink: '',
      status: 'En attente',
      createdAT: new Date(),
    },
    {
      id: 2,
      poste: 'développeur front-end NextJs',
      entreprise: {
        name: 'Facebook',
        ville: 'Paris',
        phone: 128525,
        email: 'société@gmail.com',
      },

      content: {
        aPropos: '',
        descriptif: [''],
        competence: [''],
        avantage: [''],
      },
      typeContrat: 'CDI',
      modeTravail: 'fullremote',
      salaire: 40000,
      annonceLink: '',
      status: 'Entretien',
      createdAT: new Date(),
    },
    {
      id: 3,
      poste: 'développeur back-end',
      entreprise: {
        name: 'Amazon',
        ville: 'Nante',
        phone: 128525,
        email: 'société@gmail.com',
      },
      content: {
        aPropos: '',
        descriptif: [''],
        competence: [''],
        avantage: [''],
      },
      typeContrat: 'CDI',
      modeTravail: 'fullremote',
      salaire: 50000,
      annonceLink: '',
      status: 'En attente',
      createdAT: new Date(),
    },
    {
      id: 4,
      poste: 'développeur back-end NestJs',
      entreprise: {
        name: 'Prestashop',
        ville: 'Bordeau',
        phone: 25862541,
        email: 'société@gmail.com',
      },
      content: {
        aPropos: '',
        descriptif: [''],
        competence: [''],
        avantage: [''],
      },
      typeContrat: 'CDI',
      modeTravail: 'fullremote',
      salaire: 45000,
      annonceLink: '',
      status: 'À relancer',
      createdAT: new Date(),
    },
    {
      id: 5,
      poste: 'développeur back-end Express',
      entreprise: {
        name: 'Netflix',
        ville: 'Dijon',
        phone: 25862541,
        email: 'société@gmail.com',
      },
      content: {
        aPropos: '',
        descriptif: [''],
        competence: [''],
        avantage: [''],
      },
      typeContrat: 'CDI',
      modeTravail: 'fullremote',
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
