import { Component, signal } from '@angular/core';
import { NotificationsComponent } from './notifications/notifications.component';

@Component({
  selector: 'fdw-header',
  imports: [NotificationsComponent],
  template: `
    <header
      class="flex h-20 bg-[#0167A3] text-[#ffffff] justify-between items-center"
    >
      <h1 class=" px-4 text-xl font-semibold">Hello {{ name() }}</h1>
      <div class="flex p-4 w-[500px] justify-around items-center">
        <fdw-notifications />
        <img
          src="../avatar.webp"
          alt="Avatar"
          class="max-h-[70px] rounded-full"
        />
      </div>
    </header>
  `,
})
export class HeaderComponent {
  readonly name = signal<string>('Peter Parker');
}
