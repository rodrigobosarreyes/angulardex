import { NgModule } from '@angular/core';
import { PokeInputComponent } from './poke-input.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [PokeInputComponent],
  imports: [NgbModule],
  exports: [PokeInputComponent],
})
export class PokeInputModule {}
