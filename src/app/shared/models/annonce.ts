export interface Entreprise {
  name: string;
  ville: string;
  phone: number;
  email: string;
}

export interface Content {
  aPropos: string;
  descriptif: string;
  competence: string;
  avantage: string;
}

export interface Annonce {
  id: number;
  poste: string;
  entreprise: Entreprise;
  content: Content;
  salaire: number;
  typeContrat: 'CDI' | 'CDD' | 'Freelance' | 'Stage';
  modeTravail: 'fullremote' | 'presentiel' | 'hybride';
  annonceLink: string;
  status: 'En attente' | 'Entretien' | 'À relancer' | 'Rejetée';
  createdAT?: Date;
}
