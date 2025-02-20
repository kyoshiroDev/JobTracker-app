import { Component, signal } from '@angular/core';
import { Sidebarmenu } from '../../../core/models/sidebarmenu';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'fdw-sidebar',
  imports: [RouterLink],
  template: `
  <div class="bg-[#014F86] h-screen w-[300px] flex flex-col gap-8 justify-start items-center text-[#ffffff] text-xl">
    <h2 class="mt-8 text-3xl font-semibold">JobTracker</h2>
    <ul>
      @for(menu of sidebar(); track menu.id){
        <li class="py-2 pl-4 pr-12 my-2.5 hover:bg-[#00AAFF] cursor-pointer rounded-md">
          <a routerLink={{menu.routerLink}} >{{ menu.name }}</a>
        </li>
      }
    </ul>
  </div>
  `,
})
export class SidebarComponent {
  protected readonly sidebar = signal<Sidebarmenu[]>([
    {id:1, name: "📊 Dashboard", routerLink:"/"},
    {id:2, name: "📂 Mes Candidatures", routerLink:"Mes-Candidatures"},
    {id:3, name: "🔍 Offres d'Emploi", routerLink:"Offres-d-emploi"},
  ])
}
