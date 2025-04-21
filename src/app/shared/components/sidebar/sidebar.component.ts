import { Component, inject, signal } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { Sidebarmenu } from '../../models/sidebarmenu';

@Component({
  selector: 'fdw-sidebar',
  imports: [RouterLink, RouterLinkActive],
  template: `
    <div class="bg-JobTracker-side h-full w-[300px]
  hidden
  2xl:flex
  flex-col
  gap-10
  justify-start
  items-center
  text-JobTracker-white text-xl font-semibold;">
      <div class="flex flex-col justify-center items-center h-35">
        <h1 class="text-3xl">JobTracker</h1>
      </div>
      <div class="flex flex-col">
        @for (menu of sidebar(); track menu.id) {
          <a
            class="py-2
    pl-4
    pr-12
    my-2.5
    hover:bg-JobTracker-side-hover
    cursor-pointer
    rounded-md"
            routerLinkActive="active-link"
            [routerLinkActiveOptions]="{ exact: true }"
            routerLink="{{ menu.routerLink }}"
          >{{ menu.name }}</a
          >
        }
      </div>
    </div>
  `,
})
export class SidebarComponent {
  protected readonly router = inject(Router);

  protected readonly sidebar = signal<Sidebarmenu[]>([
    { id: 1, name: '📊 Dashboard', routerLink: '/' },
    { id: 2, name: '📂 Mes Candidatures', routerLink: 'candidatures' },
    //{id:3, name: "📝 Ma TodoList", routerLink:"todoliste"},
    //{id:4, name: "🔍 Offres d'Emploi", routerLink:"Offres-d-emploi"},
    //{id:5, name: "⚙️ Parametre", routerLink:"setting"},
  ]);
}
