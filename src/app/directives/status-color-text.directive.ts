import {Directive, ElementRef, inject, signal} from '@angular/core';
import {StatusConfig} from '../tokens/statusConfig.model';

@Directive({
  selector: '[fdwStatusColorText]'
})
export class StatusColorTextDirective {
  private el = inject(ElementRef);

  statusColorText = signal<StatusConfig[]>([
    { label: 'En attente', colorClassText: 'text-JobTracker-blue'},
    { label: 'Entretien', colorClassText: 'text-green-700'},
    { label: 'À relancer', colorClassText: 'text-amber-700'},
    { label: 'Rejetée', colorClassText: 'text-red-700'}
  ])


}
