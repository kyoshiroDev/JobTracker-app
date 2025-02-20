import { Component } from '@angular/core';
import { SuiviCandidaturesComponent } from '../widgets/suivi-candidatures/suivi-candidatures.component';
import { CandidaturesRecentesComponent } from '../widgets/candidatures-recentes/candidatures-recentes.component';

@Component({
  selector: 'fdw-dashboard',
  imports: [SuiviCandidaturesComponent, CandidaturesRecentesComponent],
  template: `
    <div class="p-6 flex flex-col justify-start gap-15">
      <fdw-suivi-candidatures />
      <fdw-candidatures-recentes />
    </div>
  `,
})
export class DashboardComponent {}
