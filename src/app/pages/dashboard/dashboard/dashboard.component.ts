import { Component } from '@angular/core';
import { SuiviCandidaturesComponent } from '../widgets/suivi-candidatures/suivi-candidatures.component';
import { CandidaturesRecentesComponent } from '../widgets/candidatures-recentes/candidatures-recentes.component';
import { TacheAFaireComponent } from "../widgets/tache-a-faire/tache-a-faire.component";

@Component({
  selector: 'fdw-dashboard',
  imports: [SuiviCandidaturesComponent, CandidaturesRecentesComponent, TacheAFaireComponent],
  template: `
    <div class="p-6 flex flex-col justify-start gap-15">
      <fdw-suivi-candidatures />
      <fdw-candidatures-recentes />
      <fdw-tache-a-faire />
    </div>
  `,
})
export class DashboardComponent {}
