import { FormControl, FormGroup } from '@angular/forms';

export interface EntrepriseForm {
  name: FormControl<string | null>;
  ville: FormControl<string | null>;
  phone: FormControl<string | null>;
  email: FormControl<string | null>;
}

export interface ContentForm {
  aPropos: FormControl<string | null>;
  descriptif: FormControl<string | null>;
  competence: FormControl<string | null>;
  avantage: FormControl<string | null>;
}
export interface AnnonceForm {
  poste: FormControl<string | null>;
  entreprise: FormGroup<EntrepriseForm>;
  content: FormGroup<ContentForm>;
  salaire: FormControl<number | null>;
  contrat: FormControl<string | null>;
  annonceLink: FormControl<string | null>;
  status: FormControl<string | null>;
  createdAt: FormControl<Date | null>;
}
