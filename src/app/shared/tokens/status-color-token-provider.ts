import { Provider } from '@angular/core';
import { STATUS_COLOR } from './status-color-token';
import { StatusConfig } from '../models/statusConfig.model';

export const STATUS_COLOR_PROVIDER: Provider = {
  provide: STATUS_COLOR,
  useValue: [
    { label: 'En attente', colorClassText: 'text-JobTracker-blue', colorClassBg: 'bg-JobTracker-blue'},
    { label: 'Entretien', colorClassText: 'text-green-500', colorClassBg: 'bg-green-500'},
    { label: 'À relancer', colorClassText: 'text-yellow-500', colorClassBg: 'bg-yellow-500'},
    { label: 'Rejetée', colorClassText: 'text-red-500', colorClassBg: 'bg-red-500'}
  ] as StatusConfig[]
};