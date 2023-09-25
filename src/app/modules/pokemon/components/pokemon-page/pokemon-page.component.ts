import { Component } from '@angular/core';
import { toArray } from 'rxjs';
import { Pokemon } from '../../models/pokemon.model';
import { PokemonService } from '../../services/pokemon.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pokemon-page',
  templateUrl: './pokemon-page.component.html',
  styleUrls: ['./pokemon-page.component.scss']
})
export class PokemonPageComponent {
  pokemons: Pokemon[] = [];

  constructor(private pokemonService: PokemonService,
    private router: Router) {}

  onClickPokemonImage(pokemon: Pokemon): void {
    this.router.navigate(['pokemon', pokemon.id]);
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
