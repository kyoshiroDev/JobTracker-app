import {Component, signal, WritableSignal} from '@angular/core';
import { SidebarComponent } from './shared/components/sidebar/sidebar.component';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/components/header/header.component';
import {AnnonceFormComponent} from './shared/components/formulaire/annonce-form/annonce-form.component';
import {ButtonComponent} from './shared/components/button/button.component';

@Component({
  selector: 'fdw-root',
  imports: [SidebarComponent, RouterOutlet, HeaderComponent, AnnonceFormComponent, ButtonComponent],
  template: `
    <div class="flex h-dvh">
      @if (showModal()){
      @defer{
        <fdw-annonce-form (modalClose)="closeModal()"/>
      }}
      <!-- Sidebar fixe -->
      <fdw-sidebar />

      <!-- Header -->
      <div class="flex flex-1 flex-col max-h-dvh">
        <fdw-header />


        <!-- Contenu des pages selon les routes -->
        <router-outlet></router-outlet>
        <fdw-button (click)="openModal()" class="lg:flex lg:justify-center" />
      </div>
    </div>
  `,
})
export class AppComponent {
  showModal:WritableSignal<boolean> = signal(false);

  openModal(){
    this.showModal.set(true);
  }

  closeModal(){
    this.showModal.set(false);
  }
}
