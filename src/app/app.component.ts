import { Component } from '@angular/core';
import { SidebarComponent } from './shared/components/sidebar/sidebar.component';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/components/header/header.component';

@Component({
  selector: 'fdw-root',
  imports: [SidebarComponent, RouterOutlet, HeaderComponent],
  template: `
    <div class="flex h-dvh ">
      <!-- Sidebar fixe -->
      <fdw-sidebar />

      <!-- Header -->
      <div class="page-container">
        <fdw-header />

        <!-- Contenu des pages selon les routes -->
        <router-outlet></router-outlet>
      </div>
    </div>
  `,
})
export class AppComponent {}
