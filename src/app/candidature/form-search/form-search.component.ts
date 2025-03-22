import { Component, inject, input, output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { STATUS_COLOR } from '../../shared/tokens/status-color-token';
import { Annonce } from '../../shared/models/annonce';
import { AnnonceForm, EntrepriseForm } from '../../shared/models/annonceForm';

@Component({
  selector: 'fdw-form-search',
  standalone: true,
  imports: [ReactiveFormsModule],
  template: `
    <div class="flex flex-col items-center justify-center w-full px-4">
      <h4 class="p-8 text-2xl text-JobTracker-blue font-semibold">
        RECHERCHER
      </h4>
      <form
        (change)="formValue.emit(this.researchForm.value)"
        [formGroup]="researchForm"
        class="bg-white p-4 rounded-lg shadow-md flex flex-wrap container justify-center gap-3"
      >
        <input
          type="text"
          formControlName="poste"
          placeholder="Mot-clé..."
          class="w-1/1 p-2 border rounded-lg mt-2"
        />
        <fieldset
          class="flex justify-around gap-3 w-[500px]"
          formGroupName="entreprise"
        >
          <select
            formControlName="name"
            class="p-2 border rounded-lg appearance-none mt-2 w-1/2"
          >
            <option value="null" selected>Choisissez une entreprise</option>
            @if(annonces().length > 0) { @for (annonce of annonces(); track
            annonce.id) {
            <option [value]="annonce.entreprise.name">
              {{ annonce.entreprise.name }}
            </option>
            } }
          </select>

          <select
            formControlName="ville"
            class="p-2 border rounded-lg mt-2 appearance-none w-1/2"
          >
            <option value="null" selected>Choisissez une localisation</option>
            @if(annonces().length > 0) { @for (annonce of annonces(); track
            annonce.id) {
            <option [value]="annonce.entreprise.ville">
              {{ annonce.entreprise.ville }}
            </option>
            } }
          </select>
        </fieldset>
        <fieldset class="flex justify-around gap-3 w-[500px]">
          <select
            formControlName="salaire"
            class="p-2 border rounded-lg mt-2 appearance-none w-1/2"
          >
            <option value="null" selected>Choisissez un revenu</option>
            @if(annonces().length > 0) { @for (annonce of annonces(); track
            annonce.id) {
            <option [value]="annonce.salaire">{{ annonce.salaire }} €</option>
            } }
          </select>

          <select
            formControlName="status"
            class="p-2 border rounded-lg h-[42px] mt-2 appearance-none w-1/2"
          >
            <option value="null" selected>Choisissez un statut</option>
            @for (status of statusList; track status.label) {
            <option [value]="status.label">{{ status.label }}</option>
            }
          </select>
        </fieldset>
        <div>
          <button
            (click)="resetForm.emit(this.researchForm.reset())"
            type="button"
            class="flex justify-center items-center cursor-pointer h-[42px] w-[42px] mt-2 bg-JobTracker-side rounded-lg hover:bg-JobTracker-side-hover"
          >
            <svg
              class="text-JobTracker-white"
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 21 21"
              role="button"
              aria-label="bouton pour reset le formulaire"
            >
              <g
                fill="none"
                fill-rule="evenodd"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M6.5 3.5c-2.414 1.377-4 4.022-4 7a8 8 0 1 0 8-8" />
                <path d="M6.5 7.5v-4h-4" />
              </g>
            </svg>
          </button>
        </div>
      </form>
    </div>
  `,
})
export class FormSearchComponent {
  readonly statusList = inject(STATUS_COLOR);

  readonly annonces = input.required<Annonce[]>();
  readonly formValue = output<FormSearchComponent['researchForm']['value']>();
  readonly resetForm = output<void>();

  researchForm = new FormGroup<AnnonceForm>({
    poste: new FormControl(null),
    entreprise: new FormGroup<EntrepriseForm>({
      name: new FormControl(null),
      ville: new FormControl(null),
    }),
    salaire: new FormControl(null),
    status: new FormControl(null),
  });
}
