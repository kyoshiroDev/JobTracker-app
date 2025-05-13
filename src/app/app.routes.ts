import { CandidaturesComponent } from '../annonce/annonce-liste-page/annonce-liste-page.component';
import { DashboardComponent } from '../dashboard/dashboard-page/dashboard-page.component';
import { AnnonceDetailComponent } from '../annonce/annonce-detail/annonce-detail.component';
import { Routes } from '@angular/router';


export const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'candidatures', component: CandidaturesComponent },
  { path: 'annonce/:id', component: AnnonceDetailComponent, },
  //{ path: '**', component: PageNotFoundComponent }
];
