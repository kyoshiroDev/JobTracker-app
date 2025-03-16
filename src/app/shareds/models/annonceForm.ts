import { FormControl } from "@angular/forms";

export interface AnnonceFormSearch {
  poste: FormControl<string | null>;
  entreprise: FormControl<string | null>;
  ville: FormControl<string | null>;
  salaire: FormControl<number| null>;
  status: FormControl<string | null>;
}

export interface AnnonceForm {
  poste: FormControl<string | null>;
  entreprise: FormControl<string | null>;
  ville: FormControl<string | null>;
  content: FormControl<string | null>;
  salaire: FormControl<number | null>;
  annonceLnk: FormControl<string | null>;
  status: FormControl<string | null>;
  createdAt: FormControl<Date | null>;
}