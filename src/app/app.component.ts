import { Component } from '@angular/core';
import { SidebarComponent } from './features/dashboard/sidebar/sidebar.component';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './features/dashboard/header/header.component';

@Component({
  selector: 'fdw-root',
  imports: [SidebarComponent, RouterOutlet, HeaderComponent],
  template: `
    <div class="flex">
      <!-- Sidebar fixe -->
      <fdw-sidebar />

      <!-- Header -->
      <div class="flex flex-1 flex-col">
        <fdw-header />

        <!-- Contenu des pages selon les routes -->
        <div class="p-6">
          <router-outlet />
        </div>
      </div>
    </div>
  `,
})
export class AppComponent {}
