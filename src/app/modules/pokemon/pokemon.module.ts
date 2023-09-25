import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PokemonRoutingModule } from './pokemon-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from 'src/app/shared/shared.module';
import { PokemonCardComponent } from './components/pokemon-card/pokemon-card.component';
import { PokemonPageComponent } from './components/pokemon-page/pokemon-page.component';
import { PokemonTypeDirective } from './directives/pokemon-type/pokemon-type.directive';
import { TranslateTypePipe } from './pipes/translate-type/translate-type.pipe';
import { PokemonService } from './services/pokemon.service';
import { PokemonDetailComponent } from './components/pokemon-detail/pokemon-detail.component';


@NgModule({
  declarations: [
    PokemonCardComponent,
    PokemonTypeDirective,
    TranslateTypePipe,
    PokemonPageComponent,
    PokemonDetailComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    SharedModule,
    PokemonRoutingModule
  ],
  providers: [
    PokemonService
  ]
})
export class PokemonModule { }
