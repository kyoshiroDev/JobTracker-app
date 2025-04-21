import { CandidaturesComponent } from './candidature/candidature-liste-page/candidature-liste-page.component';
import { TodolisteComponent } from './page-todo-liste/todoliste.component';
import { DashboardComponent } from './dashboard/dashboard-page/dashboard-page.component';
import { CandidatureDetailComponent } from './candidature/candidature-detail/candidature-detail.component';
import { Routes } from '@angular/router';


export const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'candidatures', component: CandidaturesComponent },
  { path: 'candidature/:id', component: CandidatureDetailComponent, },
  { path: 'todoliste', component: TodolisteComponent },
  //{ path: '**', component: PageNotFoundComponent }
];