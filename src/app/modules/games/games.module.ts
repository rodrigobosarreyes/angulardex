import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GamesPageComponent } from './components/games-page/games-page.component';
import { GamesRoutingModule } from './games-routing.module';
import { PokeAlertModule, PokeInputModule } from 'poke-input';

@NgModule({
  declarations: [GamesPageComponent],
  imports: [CommonModule, GamesRoutingModule, PokeInputModule, PokeAlertModule],
})
export class GamesModule {}
