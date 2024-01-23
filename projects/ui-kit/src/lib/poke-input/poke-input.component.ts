import { Component, Input } from '@angular/core';

@Component({
  selector: 'lib-poke-input',
  template: `
    <div class="mb-3 row">
      <label for="xd" class="col-sm-2 col-form-label">{{ label }}</label>
      <div class="col-sm-10">
        <input id="xd" class="form-control" type="text" />
      </div>
    </div>
  `,
})
export class PokeInputComponent {
  @Input() label!: string;
}
