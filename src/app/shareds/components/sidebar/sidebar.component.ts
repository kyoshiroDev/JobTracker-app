import { Component, inject, signal } from '@angular/core';
import { Sidebarmenu } from '../../../shareds/models/sidebarmenu';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'fdw-sidebar',
  imports: [RouterLink, RouterLinkActive,],
  template: `
  <div class="side-bar">
    <h1 class="mt-8 text-3xl">JobTracker</h1>
    <ul>
      @for(menu of sidebar(); track menu.id){
        <li class="side-li" routerLinkActive="active-link" [routerLinkActiveOptions]="{ exact: true}">
          <a routerLink={{menu.routerLink}}>{{ menu.name }}</a>
        </li>
      }
    </ul>
  </div>
  `,
})
export class SidebarComponent {

  protected readonly router = inject(Router)
 
  protected readonly sidebar = signal<Sidebarmenu[]>([
    {id:1, name: "📊 Dashboard", routerLink:"/"},
    {id:2, name: "📂 Mes Candidatures", routerLink:"candidatures"},
    //{id:3, name: "📝 Ma TodoList", routerLink:"todoliste"},
    //{id:4, name: "🔍 Offres d'Emploi", routerLink:"Offres-d-emploi"},
    //{id:5, name: "⚙️ Parametre", routerLink:"setting"},
  ])
}
