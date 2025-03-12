import { Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard/dashboard.component';
import { CandidaturesComponent } from './pages/candidatures/candidatures.component';
import { TodolisteComponent } from './pages/todoliste/todoliste.component';


export const routes: Routes = [
    { path:'', component: DashboardComponent},
    { path:'candidatures', component: CandidaturesComponent},
    { path:'todoliste', component: TodolisteComponent}
];
