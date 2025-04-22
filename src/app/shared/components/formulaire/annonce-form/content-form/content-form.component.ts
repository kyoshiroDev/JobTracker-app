import {Component, input, InputSignal} from '@angular/core';
import {FormGroup, ReactiveFormsModule} from '@angular/forms';
import {AnnonceForm, ContentForm} from '../../../../models/annonceForm';

@Component({
  selector: 'fdw-content-form',
  imports: [
    ReactiveFormsModule
  ],
  template: `
    <div [formGroup]="contentForm()" class="flex flex-col gap-5">
      <!-- à propos -->
      <div class="flex flex-col w-full justify-center items-start gap-2 flex-nowrap">
        <label for="a-propos">À Propos :</label>
        <textarea
          id="a-propos"
          rows="2"
          placeholder="Saisissez vôtre texte ici ..."
          formControlName="aPropos"
          class="w-full border border-gray-300 bg-white px-2 py-1 text-sm text-gray-900 rounded-xl focus:border-JobTracker-blue focus:outline-none focus:ring-2 focus:ring-blue-200 transition-all"
        >
        </textarea>
      </div>
      <!-- Descriptif -->
      <div class="flex w-full justify-center items-center gap-2 flex-nowrap">
        <label for="descriptif">Descriptif :</label>
        <input id="descriptif" type="text" formControlName="descriptif"
               class="flex-1/2 border border-gray-300 bg-white px-2 py-1 text-sm text-gray-900 rounded-xl focus:border-JobTracker-blue focus:outline-none focus:ring-2 focus:ring-blue-200 transition-all"/>
      </div>
      <!-- Competence -->
      <div class="flex w-full justify-center items-center gap-2 flex-nowrap">
        <label for="competence">Compétences :</label>
        <input id="competence" type="text" formControlName="phone"
               class="flex-1/2 border border-gray-300 bg-white px-2 py-1 text-sm text-gray-900 rounded-xl focus:border-JobTracker-blue focus:outline-none focus:ring-2 focus:ring-blue-200 transition-all"/>
      </div>
      <!-- Avantage -->
      <div class="flex w-full justify-center items-center gap-2 flex-nowrap">
        <label for="Avantage">Avantage :</label>
        <input
          id="Avantage"
          type="text"
          formControlName="avantage"
          class="flex-1/2 border border-gray-300 bg-white px-2 py-1 text-sm text-gray-900 rounded-xl focus:border-JobTracker-blue focus:outline-none focus:ring-2 focus:ring-blue-200 transition-all"/>
      </div>
      <!-- Salaire -->
      <div class="flex w-full justify-center items-center gap-2 flex-nowrap">
        <label for="Salaire">Salaire :</label>
        <input
          id="Salaire"
          type="number"
          formControlName="salaire"
          class="flex-1/2 border border-gray-300 bg-white px-2 py-1 text-sm text-gray-900 rounded-xl focus:border-JobTracker-blue focus:outline-none focus:ring-2 focus:ring-blue-200 transition-all"/>
      </div>
      <!-- Contrat -->
      <div class="flex w-full justify-center items-center gap-2 flex-nowrap">
        <label for="Contrat">Contrat :</label>
        <input
          id="Contrat"
          type="text"
          formControlName="contrat"
          class="flex-1/2 border border-gray-300 bg-white px-2 py-1 text-sm text-gray-900 rounded-xl focus:border-JobTracker-blue focus:outline-none focus:ring-2 focus:ring-blue-200 transition-all"/>
      </div>
      <!-- AnnonceLink-->
      <div class="flex w-full justify-center items-center gap-2 flex-nowrap">
        <label for="annonceLink">Lien de l'annonce :</label>
        <input
          id="annonceLink"
          type="text"
          formControlName="annonceLink"
          class="flex-1/2 border border-gray-300 bg-white px-2 py-1 text-sm text-gray-900 rounded-xl focus:border-JobTracker-blue focus:outline-none focus:ring-2 focus:ring-blue-200 transition-all"/>
      </div>
    </div>
  `,
})
export class ContentFormComponent {
  contentForm: InputSignal<FormGroup<ContentForm>> = input.required();
}
