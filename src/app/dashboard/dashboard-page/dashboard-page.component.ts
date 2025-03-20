import { Component } from '@angular/core';
import { SuiviCandidaturesComponent } from '../suivi-candidatures/suivi-candidatures.component';
import { CandidaturesRecentesComponent } from '../candidatures-recentes/candidatures-recentes.component';
//import { TacheAFaireComponent } from './widgets/tache-a-faire/tache-a-faire.component';
import { ButtonComponent } from '../../shared/components/button/button.component';


@Component({
  selector: 'fdw-dashboard',
  imports: [
    SuiviCandidaturesComponent,
    CandidaturesRecentesComponent,
    //TacheAFaireComponent,
    ButtonComponent,
  ],
  template: `
    <div class="py-6 lg:p-6 flex flex-col justify-start gap-15 max-w-dvw h-full">
      <fdw-suivi-candidatures class="hidden lg:flex lg:justify-center"/>
      <fdw-candidatures-recentes />
      <!-- <fdw-tache-a-faire /> -->
    </div>
      <fdw-button class="hidden"/>
  `,
})
export class DashboardComponent {}
