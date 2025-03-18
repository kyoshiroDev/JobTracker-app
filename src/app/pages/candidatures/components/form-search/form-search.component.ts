import { Component, inject, input, output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { STATUS_COLOR } from '../../../../shareds/tokens/statusColor-token';
import { Annonce } from '../../../../shareds/models/annonce';
import { AnnonceFormSearch } from '../../../../shareds/models/annonceForm';

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
        class="bg-white p-4 rounded-lg shadow-md flex flex-wrap w-full justify-between"
      >
        <input
          type="text"
          formControlName="poste"
          placeholder="Mot-clé..."
          class="w-1/1 xl:w-2/7 p-2 border rounded-lg mt-2"
        />

        <select
          formControlName="entreprise"
          class="w-1/1 lg:w-1/4 xl:w-1/6 p-2 border rounded-lg appearance-none mt-2"
        >
          <option value="" selected>Choisissez une entreprise</option>
          @if(annonces().length > 0) { @for (annonce of annonces(); track
          annonce.id) {
          <option [value]="annonce.entreprise">{{ annonce.entreprise }}</option>
          } }
        </select>

        <select
          formControlName="ville"
          class="w-1/1 lg:w-1/4 xl:w-1/6 p-2 border rounded-lg mt-2 appearance-none"
        >
          <option value="" selected>Choisissez une localisation</option>
          @if(annonces().length > 0) { @for (annonce of annonces(); track
          annonce.id) {
          <option [value]="annonce.ville">{{ annonce.ville }}</option>
          } }
        </select>

        <select
          formControlName="salaire"
          class="w-1/1 lg:w-1/4 xl:w-1/6 p-2 border rounded-lg mt-2 appearance-none"
        >
          <option value="null" selected>Choisissez un revenu</option>
          @if(annonces().length > 0) { @for (annonce of annonces(); track
          annonce.id) {
          <option [value]="annonce.salaire">{{ annonce.salaire }} €</option>
          } }
        </select>

        <select
          formControlName="status"
          class="w-1/1 lg:w-1/6 xl:w-1/6 p-2 border rounded-lg h-[42px] mt-2 appearance-none"
        >
          <option value="" selected>Choisissez un statut</option>
          @for (status of statusList; track status.label) {
          <option [value]="status.label">{{ status.label }}</option>
          }
        </select>
      </form>
    </div>
  `,
})
export class FormSearchComponent {
  readonly statusList = inject(STATUS_COLOR);

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
