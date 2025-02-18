import { Component, signal } from '@angular/core';

@Component({
  selector: 'fdw-header',
  imports: [],
  template: `
    <header
      class="flex h-20 bg-[#0167A3] text-[#ffffff] justify-between items-center"
    >
      <h1 class="px-4 text-xl font-semibold">Hello {{ name() }}</h1>
      <div class="flex p-4 gap-10">
        <p class="text-xl">Notifications</p>
        <p>Avatar</p>
      </div>
    </header>
  `,
})
export class HeaderComponent {
  readonly name = signal<string>('Peter Parker');
}
