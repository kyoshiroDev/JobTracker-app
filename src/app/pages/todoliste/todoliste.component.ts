import { Component } from '@angular/core';
import { ButtonComponent } from "../../shareds/components/button/button.component";

@Component({
  selector: 'fdw-todoliste',
  imports: [ButtonComponent],
  template: `
  <fdw-button />
  `,
})
export class TodolisteComponent {

}
