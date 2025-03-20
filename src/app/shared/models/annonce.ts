export interface Annonce {
  id: number;
  poste: string;
  entreprise: string;
  ville: string
  content: string;
  salaire: number;
  contrat?: string;
  annonceLink: string;
  status: string;
  createdAT: Date;
}