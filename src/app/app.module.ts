import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokemonCardComponent } from './pokemon-card/pokemon-card.component';
import { PokemonTypeDirective } from './directives/pokemon-type/pokemon-type.directive';
import { PadStartPipe } from './pipes/pad-start.pipe';
import { TranslateTypePipe } from './pipes/translate-type.pipe';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    PokemonCardComponent,
    PokemonTypeDirective,
    PadStartPipe,
    TranslateTypePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
