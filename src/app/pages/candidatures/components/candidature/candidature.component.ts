import { Component, computed, input } from '@angular/core';
import { Annonce } from '../../../../shareds/models/annonce';
import { statusConfig } from '../../../dashboard/widgets/suivi-candidatures/statusConfig.model';
import { Status } from '../../../../shareds/enums/status.enum';

@Component({
  selector: 'fdw-candidature',
  imports: [],
  template: `
    <a
      class="flex gap-3 bg-JobTracker-white rounded-md p-4 shadow-md cursor-pointer hover:scale-102 transition-transform duration-500 ease-in-out"
    >
      <div
        class="w-[100px] flex flex-col justify-center text-2xl text-JobTracker-blue font-semibold"
      >
        <p>{{ annonce().salaire }} €</p>
      </div>
      <div class="grow pl-15">
        <h4 class="text-2xl text-JobTracker-blue font-semibold">
          {{ annonce().poste }}
        </h4>
        <p class="text-xl text-JobTracker-blue font-semibold">
          {{ annonce().entreprise }}
        </p>
        <p class="flex items-center gap-2 text-lg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="15"
            height="15"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M12 19.35q3.05-2.8 4.525-5.087T18 10.2q0-2.725-1.737-4.462T12 4T7.738 5.738T6 10.2q0 1.775 1.475 4.063T12 19.35m0 1.975q-.35 0-.7-.125t-.625-.375Q9.05 19.325 7.8 17.9t-2.087-2.762t-1.275-2.575T4 10.2q0-3.75 2.413-5.975T12 2t5.588 2.225T20 10.2q0 1.125-.437 2.363t-1.275 2.575T16.2 17.9t-2.875 2.925q-.275.25-.625.375t-.7.125M12 12q.825 0 1.413-.587T14 10t-.587-1.412T12 8t-1.412.588T10 10t.588 1.413T12 12"
            />
          </svg>
          {{ annonce().ville }}
        </p>
      </div>
      <div class="flex items-center w-[100px] text-JobTracker-blue">
        <p
          [class]="statusClass()"
          class="rounded-4xl p-2 w-full text-center text-JobTracker-white"
        >
          {{ annonce().status }}
        </p>
      </div>
    </a>
  `,
})
export class CandidatureComponent {
  readonly annonce = input.required<Annonce>();

  private readonly statusClasses: Record<Status, string> = {
    [Status.Entretien]: 'bg-green-500',
    [Status.Rejetee]: 'bg-red-500',
    [Status.Arelancer]: 'bg-yellow-500',
  };

  protected readonly statusClass = computed(() =>
    this.statusClasses[this.annonce().status as Status] || 'bg-JobTracker-blue'
  );
}
