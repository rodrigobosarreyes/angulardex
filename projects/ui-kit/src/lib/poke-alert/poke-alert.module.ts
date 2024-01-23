import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokeAlertComponent } from './components/poke-alert/poke-alert.component';
import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [PokeAlertComponent],
  imports: [CommonModule, NgbAlertModule],
  exports: [PokeAlertComponent],
})
export class PokeAlertModule {}
