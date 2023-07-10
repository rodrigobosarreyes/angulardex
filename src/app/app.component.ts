import { Component } from '@angular/core';
import { Pokemon } from './models/pokemon.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'AngularDex';
  pokemons: Pokemon[] = [
    {
      id: 448,
      imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/448.png',
      name: 'Lucario',
      types: ['Fighting', 'Steel']
    },
    {
      id: 743,
      imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/743.png',
      name: 'Ribombee',
      types: ['Bug', 'Fairy']
    },
    {
      id: 492,
      imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/492.png',
      name: 'Shaymin',
      types: ['Grass']
    }
];

  onClickPokemonImage(pokemon: Pokemon): void {
    console.log(pokemon);
  }
}
