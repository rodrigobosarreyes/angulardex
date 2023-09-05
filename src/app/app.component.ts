import { Component, OnInit } from '@angular/core';
import { Pokemon } from './models/pokemon.model';
import { PokemonService } from './services/pokemon.service';
import { toArray } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'AngularDex';
  pokemons: Pokemon[] = [];

  constructor(private pokemonService: PokemonService) {}

  onClickPokemonImage(pokemon: Pokemon): void {
    console.log(pokemon);
  }

  ngOnInit(): void {
    this.pokemonService.getAllPokemon(0)
      .pipe(toArray())
      .subscribe((p: any[]) => {
        this.pokemons = p.map(poke => ({
          id: poke.id,
          name: poke.name,
          types: poke.types.map((t: any) => t.type.name.split(" ").map((l: string) => l[0].toUpperCase() + l.substring(1)).join(" ")),
          imageUrl: poke.sprites.other['official-artwork'].front_default
        })).sort((a, b) => a.id - b.id);
    });
  }
}
