import { Component } from '@angular/core';
import { SidebarComponent } from './features/dashboard/sidebar/sidebar.component';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './features/dashboard/header/header.component';

@Component({
  selector: 'fdw-root',
  imports: [SidebarComponent, RouterOutlet, HeaderComponent],
  template: `
    <div class="flex max-h-screen">
      <!-- Sidebar fixe -->
      <fdw-sidebar />

      <!-- Header -->
      <div class="flex flex-1 flex-col bg-[#ECF0F1]">
        <fdw-header />

        <!-- Contenu des pages selon les routes -->
        <router-outlet></router-outlet>
      </div>
    </div>
  `,
})
export class AppComponent {}
