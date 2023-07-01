import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Pokemon } from '../models/pokemon.model';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.scss']
})
export class PokemonCardComponent {
  @Input() pokemon: Pokemon = {} as Pokemon;
  @Output() clickImage = new EventEmitter<Pokemon>();

  onClickPokemonImage(): void {
    this.clickImage.emit(this.pokemon);
  }
}
