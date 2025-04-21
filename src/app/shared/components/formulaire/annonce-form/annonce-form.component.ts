import {Component} from '@angular/core';

@Component({
  selector: 'fdw-annonce-form',
  imports: [],
  template: `
    <div (click)="$event.stopPropagation()"
         class="z-1 flex items-center justify-center absolute w-full h-full min-h-screen bg-JobTracker-grayOpacity">
      <div class="w-[600px] h-[800px] bg-JobTracker-white rounded-xl z-3 border border-JobTracker-blue relative">
        <div class="flex justify-end py-4 px-4">
          <button class="text-3xl cursor-pointer w-14 h-14 text-JobTracker-side hover:text-JobTracker-side-hover">X
          </button>
        </div>
        <p class="text-JobTracker-blue text-center text-xl font-semibold">Ajout d'annonce</p>
        <form>

        </form>
      </div>
    </div>
  `,
})
export class AnnonceFormComponent {

}
