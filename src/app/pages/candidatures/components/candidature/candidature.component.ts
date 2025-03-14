import { Component, computed, inject, input, Signal } from '@angular/core';
import { Annonce } from '../../../../shareds/models/annonce';
import { STATUS_COLOR } from '../../../../shareds/tokens/statusColor-token';

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
          {{ annonce().ville }}
        </p>
      </div>
      <div class="flex items-center w-[100px] text-JobTracker-blue">
        <p
          [class]="statusConfig()"
          class="rounded-4xl p-2 w-full text-center text-JobTracker-white font-semibold"
        >
          {{ annonce().status }}
        </p>
      </div>
    </a>
  `,
})
export class CandidatureComponent {
  readonly annonce = input.required<Annonce>();
  readonly status = inject(STATUS_COLOR);

  readonly statusConfig: Signal<string | undefined> = computed(() => {
    const statusConfig = this.status.find(
      (config) => config.label === this.annonce().status
    );
    return statusConfig ? statusConfig.colorClassBg : 'bg-JobTracker-blue';
  });
}
