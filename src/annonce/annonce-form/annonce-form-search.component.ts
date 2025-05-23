import {ChangeDetectionStrategy, Component, inject, input, output} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import { Annonce } from '../annonce';
import {AnnonceForm, ContentForm, EntrepriseForm} from './annonceForm';
import { STATUS_COLOR } from '../../app/tokens/status-color-token';

@Component({
  selector: 'fdw-annonce-form-search',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [ReactiveFormsModule],
  template: `
    <div class="w-full px-2 text-sm md:text-lg">
      <form
        (change)="formValue.emit(this.researchForm.value)"
        [formGroup]="researchForm"
        class="bg-white p-3 rounded-lg shadow-md flex flex-wrap justify-center md:w-3/4 lg:w-full gap-3 mt-5 m-auto"
      >
        <p class="text-2xl text-JobTracker-blue font-semibold m-auto">RECHERCHER</p>
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
        <input
          aria-label="poste"
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
            aria-label="name"
            formControlName="name"
            class="p-2 border rounded-lg appearance-none mt-2 w-1/2 text-center"
          >
            <option value="" selected>Choisissez une entreprise</option>
            @if(annonces().length > 0) { @for (annonce of annonces(); track
            annonce.id) {
            <option [value]="annonce.entreprise.name">
              {{ annonce.entreprise.name }}
            </option>
            } }
          </select>
          <select
            aria-label="ville"
            formControlName="ville"
            class="p-2 border rounded-lg mt-2 appearance-none w-1/2 text-center"
          >
            <option value="" selected>Choisissez une localisation</option>
            @if(annonces().length > 0) { @for (annonce of annonces(); track
            annonce.id) {
            <option [value]="annonce.entreprise.ville">
              {{ annonce.entreprise.ville }}
            </option>
            } }
          </select>
        </fieldset>
        <fieldset formGroupName="content" class="flex justify-around gap-3 w-[500px]">
          <select
            aria-label="salaire"
            formControlName="salaire"
            class="p-2 border rounded-lg mt-2 appearance-none w-1/2 text-center"
          >
            <option value="" selected>Choisissez un revenu</option>
            @if(annonces().length > 0) { @for (annonce of annonces(); track
            annonce.id) {
            <option [value]="annonce.content.salaire">{{ annonce.content.salaire }} €</option>
            } }
          </select>
          <select
            aria-label="status"
            formControlName="status"
            class="p-2 border rounded-lg mt-2 appearance-none w-1/2 text-center"
          >
            <option value="" selected>Choisissez un statut</option>
            @for (status of statusList; track status.label) {
              <option [value]="status.label">{{ status.label }}</option>
            }
          </select>
        </fieldset>
      </form>
    </div>
  `,
})
export class AnnonceFormSearchComponent {
  private readonly fb = inject(FormBuilder);
  readonly statusList = inject(STATUS_COLOR);

  readonly annonces = input.required<Annonce[]>();
  readonly formValue = output<AnnonceFormSearchComponent['researchForm']['value']>();
  readonly resetForm = output();

  researchForm = this.fb.group<
    Pick<AnnonceForm, 'poste'> & {
    entreprise: FormGroup<Pick<EntrepriseForm, 'name' | 'ville'>>;
    content: FormGroup<Pick<ContentForm, 'salaire' | 'status'>>;
  }
  >({
    poste: this.fb.control('', {nonNullable: true}),

    entreprise: this.fb.group<Pick<EntrepriseForm, 'name' | 'ville'>>({
      name: this.fb.control('', {nonNullable: true}),
      ville: this.fb.control('', {nonNullable: true}),
    }),

    content: this.fb.group<Pick<ContentForm, 'salaire' | 'status'>>({
      salaire: this.fb.control('', {nonNullable: true}),
      status: this.fb.control<'En attente' | 'Entretien' | 'À relancer' | 'Rejetée' | ''>('', {nonNullable: true}),
    }),
  });
}

