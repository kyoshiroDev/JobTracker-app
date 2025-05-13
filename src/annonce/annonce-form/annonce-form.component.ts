import {Component, output, OutputEmitterRef, signal, WritableSignal} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {AnnonceForm, ContentForm, EntrepriseForm} from '../annonceForm';
import {EntrepriseFormComponent} from './entreprise-form/entreprise-form.component';
import {ContentFormComponent} from './content-form/content-form.component';

@Component({
  selector: 'fdw-annonce-form',
  imports: [
    ReactiveFormsModule,
    EntrepriseFormComponent,
    ContentFormComponent
  ],
  template: `
    <div (click)="$event.stopPropagation()"
         class="z-1 flex items-center justify-center absolute w-full h-full min-h-screen bg-JobTracker-grayOpacity">
      <div class="w-[600px] max-h-[950px] bg-JobTracker-white rounded-xl z-3 border border-JobTracker-blue relative">
        <div class="grid grid-cols-3 items-center py-4 px-4">
          @if (!entrepriseForm()) {
            <button
              (click)="switchForm()"
              type="button"
              class="cursor-pointer text-JobTracker-side hover:text-JobTracker-side-hover justify-self-start"
            >
              <- Entreprise
            </button>
          } @else {<span></span>}
          <p class="text-JobTracker-blue text-center text-2xl font-semibold justify-self-center">Ajout d'annonce</p>
          <button (click)="modalClose.emit()"
                  class="text-3xl cursor-pointer w-14 h-14 text-JobTracker-side hover:text-JobTracker-side-hover justify-self-end">X
          </button>
        </div>
        <form [formGroup]="formAnnonce" class="flex flex-col gap-5 p-5">
          <div class="flex flex-col w-full justify-center items-start gap-2 flex-nowrap">
            <label for="poste">Poste :</label>
            <input id="poste" type="text" formControlName="poste"
                   placeholder="Développeur web"
                   class="w-full h-12 border border-gray-300 bg-white px-2 py-1 text-sm text-gray-900 rounded-xl focus:border-JobTracker-blue focus:outline-none focus:ring-2 focus:ring-blue-200 transition-all"/>
          </div>
          <!-- Entreprise -->
          @if (entrepriseForm()) {
            <fdw-entreprise-form [entrepriseForm]="formAnnonce.controls.entreprise"/>
          } @else {
            <!-- Content -->
            <fieldset class="flex flex-col gap-5 border border-JobTracker-blue p-5 rounded-md">
              <legend class="text-center font-semibold text-2xl px-2 text-JobTracker-blue">Contenue de l'annonce
              </legend>
              <fdw-content-form [contentForm]="formAnnonce.controls.content"/>

            </fieldset>
            <button
              class="m-auto w-70 h-10 bg-JobTracker-side hover:bg-JobTracker-side-hover text-JobTracker-gray font-semibold cursor-pointer rounded-lg"
              type="submit">Ajouter
            </button>
          }
        </form>
        @if (entrepriseForm()) {
          <div class="flex px-5 py-2 justify-end">
            <button
              (click)="switchForm()"
              type="button"
              class="cursor-pointer text-JobTracker-side hover:text-JobTracker-side-hover"
            >
              Annonce ->
            </button>
          </div>
        }
      </div>
    </div>
  `,
})
export class AnnonceFormComponent {
  modalClose: OutputEmitterRef<void> = output();
  entrepriseForm: WritableSignal<boolean>= signal(true)

  switchForm() {
    this.entrepriseForm.set(!this.entrepriseForm())
  }

  protected readonly formAnnonce: FormGroup<AnnonceForm> = new FormGroup<AnnonceForm>({
    poste: new FormControl<string | null>(null),
    entreprise: new FormGroup<EntrepriseForm>({
      name: new FormControl<string | null>(null),
      ville: new FormControl<string | null>(null),
      phone: new FormControl<string | null>(null),
      email: new FormControl<string | null>(null),
    }),
    content: new FormGroup<ContentForm>({
      aPropos: new FormControl<string | null>(null),
      descriptif: new FormControl<string | null>(null),
      competence: new FormControl<string | null>(null),
      avantage: new FormControl<string | null>(null),
      salaire: new FormControl<number | null>(null),
      typeContrat: new FormControl<'CDI' | 'CDD' | 'Freelance' | 'Stage' | null>(null),
      modeTravail: new FormControl<'fullremote' | 'presentiel' | 'hybride' | null>(null),
      annonceLink: new FormControl<string | null>(null),
      status: new FormControl<string | null>('En attente'),
    }),
    createdAt: new FormControl<Date | null>(new Date(Date.now())),
  })
}
