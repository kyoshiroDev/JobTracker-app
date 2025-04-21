import { Component } from '@angular/core';
import { SidebarComponent } from './shared/components/sidebar/sidebar.component';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/components/header/header.component';
import {AnnonceFormComponent} from './shared/components/formulaire/annonce-form/annonce-form.component';

@Component({
  selector: 'fdw-root',
  imports: [SidebarComponent, RouterOutlet, HeaderComponent, AnnonceFormComponent],
  template: `
    <div class="flex h-dvh">
      <!--@defer {
        <fdw-annonce-form />
      }-->
      <!-- Sidebar fixe -->
      <fdw-sidebar />

      <!-- Header -->
      <div class="flex flex-1 flex-col max-h-dvh">
        <fdw-header />


        <!-- Contenu des pages selon les routes -->
        <router-outlet></router-outlet>
      </div>
    </div>
  `,
})
export class AppComponent {}
