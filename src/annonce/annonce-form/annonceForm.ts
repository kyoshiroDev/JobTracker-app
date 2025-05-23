import { FormControl, FormGroup } from '@angular/forms';

export interface EntrepriseForm {
  name: FormControl<string>;
  ville: FormControl<string>;
  phone: FormControl<string>;
  email: FormControl<string>;
}

export interface ContentForm {
  about: FormControl<string>;
  descriptif: FormControl<string>;
  competence: FormControl<string>;
  avantage: FormControl<string>;
  salaire: FormControl<string>;
  typeContrat: FormControl<'CDI' | 'CDD' | 'Freelance' | 'Stage' | ''>;
  modeTravail: FormControl<'fullremote' | 'presentiel' | 'hybride' | ''>;
  status: FormControl <'En attente' | 'Entretien' | 'À relancer' | 'Rejetée' | ''>;
  annonceLink: FormControl<string>;
}
export interface AnnonceForm {
  poste: FormControl<string>;
  entreprise: FormGroup<EntrepriseForm>;
  content: FormGroup<ContentForm>;
  createdAt: FormControl<Date>;
}
