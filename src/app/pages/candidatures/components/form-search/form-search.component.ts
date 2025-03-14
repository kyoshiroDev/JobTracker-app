import { Component, EventEmitter, inject, input, output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { STATUS_COLOR } from '../../../../shareds/tokens/statusColor-token';
import { Annonce } from '../../../../shareds/models/annonce';

@Component({
  selector: 'fdw-form-search',
  imports: [ReactiveFormsModule],
  template: `
    <div class="flex flex-col items-center justify-center w-full px-4">
      <h4 class="p-8 text-2xl text-JobTracker-blue font-semibold">
        RECHERCHER
      </h4>
      <form
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
          <option value="" disabled selected>Choisissez une entreprise</option>
          @for (annonce of annonce(); track annonce.id) {
          <option [value]="annonce.entreprise">{{ annonce.entreprise }}</option>
          }
        </select>

        <select
          class="w-1/6 p-2 border rounded-lg focus:ring focus:ring-blue-300 h-[42px] appearance-none"
        >
        <option value="" disabled selected>Choisissez une localisation</option>
          @for (annonce of annonce(); track annonce.id) {
          <option>{{ annonce.ville }}</option>
          }
        </select>

        <select
          class="w-1/6 p-2 border rounded-lg focus:ring focus:ring-blue-300 h-[42px] appearance-none"
        >
        <option value="" disabled selected>Choisissez un revenu</option>
          @for (annonce of annonce(); track annonce.id) {
          <option>{{ annonce.salaire }} €</option>
          }
        </select>

        <select
          class="w-1/6 p-2 border rounded-lg focus:ring focus:ring-blue-300 h-[42px] appearance-none"
        >
        <option value="" disabled selected>Choisissez un statut</option>
          @for (status of status; track status.label) {
          <option>{{ status.label }}</option>
          }
        </select>
      </form>
    </div>
  `,
})
export class FormSearchComponent {
  readonly status = inject(STATUS_COLOR);
  readonly formBuilder = inject(FormBuilder);

  readonly annonce = input.required<Annonce[]>();
  /** Émetteur de filtres mis à jour */
  filtersChange = output();

  researchForm: FormGroup = this.formBuilder.group({
    poste: <string>'',
    entreprise: <string> '',
    ville: <string> '',
    salaire: <string> '',
    status:<string>''
  });

}
