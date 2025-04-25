import {Component, input, InputSignal} from '@angular/core';
import {FormGroup, ReactiveFormsModule} from '@angular/forms';
import {AnnonceForm, ContentForm} from '../../../../models/annonceForm';

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

    </div>
  `,
})
export class ContentFormComponent {
  contentForm: InputSignal<FormGroup<ContentForm>> = input.required();
}
