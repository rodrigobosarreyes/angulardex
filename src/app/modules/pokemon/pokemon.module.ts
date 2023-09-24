import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonCardComponent } from './components/pokemon-card/pokemon-card.component';
import { PokemonTypeDirective } from './directives/pokemon-type/pokemon-type.directive';
import { TranslateTypePipe } from './pipes/translate-type/translate-type.pipe';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from 'src/app/shared/shared.module';
import { PokemonPageComponent } from './components/pokemon-page/pokemon-page.component';



@NgModule({
  declarations: [
    PokemonCardComponent,
    PokemonTypeDirective,
    TranslateTypePipe,
    PokemonPageComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    SharedModule
  ],
  exports: [
    PokemonCardComponent,
    PokemonTypeDirective,
    TranslateTypePipe
  ]
})
export class PokemonModule { }
