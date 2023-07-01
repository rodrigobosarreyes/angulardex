import { Component } from '@angular/core';
import { Pokemon } from './models/pokemon.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'AngularDex';
  pokemon: Pokemon = {
    id: 1,
    imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png',
    name: 'Bulbasaur',
    types: ['Grass', 'Poison']
  };

  onClickPokemonImage(pokemon: Pokemon): void {
    console.log(pokemon);
  }
}
