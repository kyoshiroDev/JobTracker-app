import { Component, signal } from '@angular/core';
//import { NotificationsComponent } from './notifications/notifications.component';

@Component({
  selector: 'fdw-header',
  imports: [/*NotificationsComponent*/],
  template: `
    <header>
      <div class="flex justify-center items-center gap-5 pl-5">
        <img
          src="../avatar.webp"
          alt="Avatar"
          class="max-h-[70px] rounded-full"
        />
        <h2 class=" px-4 text-xl">Hello {{ name() }}</h2>
      </div>
      <!--<fdw-notifications />-->
    </header>
  `,
})
export class HeaderComponent {
  readonly name = signal<string>('Peter Parker');
}
