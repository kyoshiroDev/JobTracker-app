import {Component, input, InputSignal} from '@angular/core';
import {FormGroup, ReactiveFormsModule} from '@angular/forms';
import {AnnonceForm, ContentForm} from '../../annonceForm';

@Component({
  selector: 'fdw-content-form',
  imports: [
    ReactiveFormsModule
  ],
  template: `
    <div [formGroup]="contentForm()" xmlns="http://www.w3.org/1999/html" class="flex flex-col gap-5">
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
      <div class="flex flex-col w-full justify-center items-start gap-2 flex-nowrap">
        <label for="descriptif">Descriptif :</label>
        <textarea
          id="descriptif"
          rows="2"
          placeholder="Saisissez vôtre texte ici ..."
          formControlName="descriptif"
          class="w-full border border-gray-300 bg-white px-2 py-1 text-sm text-gray-900 rounded-xl focus:border-JobTracker-blue focus:outline-none focus:ring-2 focus:ring-blue-200 transition-all">
        </textarea>
      </div>
      <!-- Competence -->
      <div class="flex flex-col w-full justify-center items-start gap-2 flex-nowrap">
        <label for="competence">Competences :</label>
        <textarea
          id="competence"
          rows="2"
          placeholder="Saisissez vôtre texte ici ..."
          formControlName="competence"
          class="w-full border border-gray-300 bg-white px-2 py-1 text-sm text-gray-900 rounded-xl focus:border-JobTracker-blue focus:outline-none focus:ring-2 focus:ring-blue-200 transition-all">
        </textarea>
      </div>
      <!-- Avantage -->
      <div class="flex flex-col w-full justify-center items-start gap-2 flex-nowrap">
        <label for="avantage">Avantages :</label>
        <textarea
          id="avantage"
          rows="2"
          placeholder="Saisissez vôtre texte ici ..."
          formControlName="avantage"
          class="w-full border border-gray-300 bg-white px-2 py-1 text-sm text-gray-900 rounded-xl focus:border-JobTracker-blue focus:outline-none focus:ring-2 focus:ring-blue-200 transition-all">
        </textarea>
      </div>
      <div class="flex w-full  justify-between items-center">
        <!-- Salaire -->
        <div class="flex items-center justify-center gap-2">
          <label class="min-w-fit" for="salaire">Salaire :</label>
          <input
            id="salaire"
            type="number"
            placeholder="10000"
            formControlName="salaire"
            class="max-w-16 text-center border border-gray-300 bg-white py-1 text-sm text-gray-900 rounded-xl focus:border-JobTracker-blue focus:outline-none focus:ring-2 focus:ring-blue-200 transition-all"/>

        </div>
        <!-- Contrat -->
        <div class="flex items-center justify-center gap-2">
          <label class="min-w-fit" for="typeContrat">Contrat :</label>
          <select
            id="typeContrat"
            formControlName="typeContrat"
            class="border border-gray-300 bg-white px-2 py-1 text-sm text-gray-900 rounded-xl focus:border-JobTracker-blue focus:outline-none focus:ring-2 focus:ring-blue-200 transition-all">
            <option value='null' hidden>Contrat ...</option>
            <option value="CDI">CDI</option>
            <option value="CDD">CDD</option>
            <option value="Freelance">Freelance</option>
            <option value="Stage">Stage</option>
          </select>
        </div>
        <!-- Mode de travail -->
        <div class="flex items-center justify-center gap-2">
          <label class="min-w-fit" for="modeTravail">Présence :</label>
          <select
            id="modeTravail"
            formControlName="modeTravail"
            class="border border-gray-300 bg-white px-2 py-1 text-sm text-gray-900 rounded-xl focus:border-JobTracker-blue focus:outline-none focus:ring-2 focus:ring-blue-200 transition-all">
            <option value="null" hidden>Présence ...</option>
            <option value="fullremote">Fullremote</option>
            <option value="presentiel">Présentiel</option>
            <option value="hybride">Hybride</option>
          </select>
        </div>
      </div>
      <!-- AnnonceLink-->
      <div class="flex w-full justify-center items-center gap-2 flex-nowrap">
        <label for="annonceLink">Lien de l'annonce :</label>
        <input
          id="annonceLink"
          type="text"
          placeholder="https://www.google.com"
          formControlName="annonceLink"
          class="flex-1/2 border border-gray-300 bg-white px-2 py-1 text-sm text-gray-900 rounded-xl focus:border-JobTracker-blue focus:outline-none focus:ring-2 focus:ring-blue-200 transition-all"/>
      </div>
    </div>
  `,
})
export class ContentFormComponent {
  contentForm: InputSignal<FormGroup<ContentForm>> = input.required();
}
