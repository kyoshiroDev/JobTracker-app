import {Component, input, InputSignal,} from '@angular/core';
import {FormGroup, ReactiveFormsModule} from '@angular/forms';
import {EntrepriseForm} from '../../../../models/annonceForm';

@Component({
  selector: 'fdw-entreprise-form',
  imports: [
    ReactiveFormsModule
  ],
  template: `
    <fieldset [formGroup]="entrepriseForm()" class="flex flex-col gap-5 border border-JobTracker-blue p-5 rounded-md">
      <legend class="text-center font-semibold text-2xl px-2 text-JobTracker-blue">Entreprise</legend>
      <!-- Name -->
      <div class="flex w-full justify-center items-center gap-2 flex-nowrap">
        <label for="enterprise">Nom :</label>
        <input id="entreprise" type="text" formControlName="name"
               class="flex-1/2 border border-gray-300 bg-white px-2 py-1 text-sm text-gray-900 rounded-xl focus:border-JobTracker-blue focus:outline-none focus:ring-2 focus:ring-blue-200 transition-all"/>
      </div>
      <!-- Ville -->
      <div class="flex w-full justify-center items-center gap-2 flex-nowrap">
        <label for="enterprise">Ville :</label>
        <input id="entreprise" type="text" formControlName="ville"
               class="flex-1/2 border border-gray-300 bg-white px-2 py-1 text-sm text-gray-900 rounded-xl focus:border-JobTracker-blue focus:outline-none focus:ring-2 focus:ring-blue-200 transition-all"/>
      </div>
      <!-- Phone -->
      <div class="flex w-full justify-center items-center gap-2 flex-nowrap">
        <label for="enterprise">Téléphone :</label>
        <input id="entreprise" type="number" formControlName="phone"
               class="flex-1/2 border border-gray-300 bg-white px-2 py-1 text-sm text-gray-900 rounded-xl focus:border-JobTracker-blue focus:outline-none focus:ring-2 focus:ring-blue-200 transition-all"/>
      </div>
      <!-- Email -->
      <div class="flex w-full justify-center items-center gap-2 flex-nowrap">
        <label for="enterprise">Email :</label>
        <input
          id="entreprise"
          type="email"
          formControlName="email"
          class="flex-1/2 border border-gray-300 bg-white px-2 py-1 text-sm text-gray-900 rounded-xl focus:border-JobTracker-blue focus:outline-none focus:ring-2 focus:ring-blue-200 transition-all"/>
      </div>
    </fieldset>`,
})
export class EntrepriseFormComponent {
  entrepriseForm: InputSignal<FormGroup<EntrepriseForm>> = input.required();
}
