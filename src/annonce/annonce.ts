export interface Entreprise {
  name: string;
  ville: string;
  phone: string;
  email: string;
}

export interface Content {
  about: string;
  descriptif: string;
  competence: string;
  avantage: string;
  salaire: string;
  typeContrat: 'CDI' | 'CDD' | 'Freelance' | 'Stage' | '';
  modeTravail: 'fullremote' | 'presentiel' | 'hybride' | '';
  annonceLink: string;
  status: 'En attente' | 'Entretien' | 'À relancer' | 'Rejetée' | '';
}

export interface Annonce {
  id: number;
  poste: string;
  entreprise: Entreprise;
  content: Content;
  createdAt: Date;
}
