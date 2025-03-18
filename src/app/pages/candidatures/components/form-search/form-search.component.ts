import { Component,inject, input, output } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
} from '@angular/forms';
import { STATUS_COLOR } from '../../../../shareds/tokens/statusColor-token';
import { Annonce } from '../../../../shareds/models/annonce';
import { AnnonceFormSearch } from '../../../../shareds/models/annonceForm';

@Component({
  selector: 'fdw-form-search',
  imports: [ReactiveFormsModule],
  template: `
    <div class="flex flex-col items-center justify-center w-full px-4">
      <h4 class="p-8 text-2xl text-JobTracker-blue font-semibold">
        RECHERCHER
      </h4>
      <form
        (change)="formValue.emit(this.researchForm.value)"
        [formGroup]="researchForm"
        class="bg-white p-4 rounded-lg shadow-md flex gap-2 items-center w-full"
      >
        <!-- Zone de texte -->
        <input
          type="text"
          formControlName="poste"
          placeholder="Mot-clé..."
          class="w-3/6 p-2 border rounded-lg focus:ring focus:ring-blue-300"
        />

        <!-- Sélections -->
        <select
          formControlName="entreprise"
          class="w-1/6 p-2 border rounded-lg h-[42px] appearance-none"
        >
          <option value="" selected>Choisissez une entreprise</option>
          @for (annonce of annonces(); track annonce.id) {
          <option [value]="annonce.entreprise">{{ annonce.entreprise }}</option>
          }
        </select>

        <select
          formControlName="ville"
          class="w-1/6 p-2 border rounded-lg focus:ring focus:ring-blue-300 h-[42px] appearance-none"
        >
          <option value="" selected>
            Choisissez une localisation
          </option>
          @for (annonce of annonces(); track annonce.id) {
          <option [value]="annonce.ville">{{ annonce.ville }}</option>
          }
        </select>

        <select
          formControlName="salaire"
          class="w-1/6 p-2 border rounded-lg focus:ring focus:ring-blue-300 h-[42px] appearance-none"
        >
          <option value="null" selected>Choisissez un revenu</option>
          @for (annonce of annonces(); track annonce.id) {
          <option [value]="annonce.salaire">{{ annonce.salaire }} €</option>
          }
        </select>

        <select
          formControlName="status"
          class="w-1/6 p-2 border rounded-lg focus:ring focus:ring-blue-300 h-[42px] appearance-none"
        >
          <option value="" selected>Choisissez un statut</option>
          @for (status of status; track status.label) {
          <option [value]="status.label">{{ status.label }}</option>
          }
        </select>
      </form>
    </div>
  `,
})
export class FormSearchComponent {
  readonly status = inject(STATUS_COLOR);

  readonly annonces = input.required<Annonce[]>();
  readonly formValue = output<FormSearchComponent['researchForm']['value']>();

  researchForm = new FormGroup<AnnonceFormSearch>({
    poste: new FormControl(''),
    entreprise: new FormControl(''),
    ville: new FormControl(''),
    salaire: new FormControl(null),
    status: new FormControl(''),
  });
}
