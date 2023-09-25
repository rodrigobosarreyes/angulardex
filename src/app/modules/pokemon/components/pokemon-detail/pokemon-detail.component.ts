import { Component, OnDestroy, OnInit } from '@angular/core';
import { PaginationBtnOption } from '../pokemon-pagination/pokemon-pagination.component';
import { ActivatedRoute, Router } from '@angular/router';
import { Pokemon } from '../../models/pokemon.model';
import { Subscription } from 'rxjs';
import { PokemonService } from '../../services/pokemon.service';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.scss']
})
export class PokemonDetailComponent implements OnInit, OnDestroy {
  pokemon!: Pokemon;
  previous?: Pokemon;
  next?: Pokemon;
  private subs = new Subscription();

  constructor(
    private router: Router, 
    private activatedRoute: ActivatedRoute,
    private pokemonService: PokemonService) {}

  ngOnInit(): void {
    // Nos suscribimos a cada cambio en la url.
    const paramMap$ = this.activatedRoute.paramMap.subscribe(params => {
      const pokeId = parseInt(params.get('id')!, 10);
      if (pokeId < 2) {
        this.previous = undefined;
      } else {
        this.getPrevious(pokeId - 1);
      }
      if (pokeId > 1009) {
        this.next = undefined;
      } else {
        this.getNext(pokeId + 1);
      }
      this.getPokemon(pokeId);
    });
    // Agregamos la suscripción al contenedor.
    this.subs.add(paramMap$);
  }

  onClickPagination(opt: PaginationBtnOption): void {
    if (opt === 'next') {
      // Con skipLocationChange evitamos registrar el cambio a estas páginas, lo puedes omitir si lo deseas.
      this.router.navigate(['pokemon', this.next?.id], { skipLocationChange: true });
    } else if (opt === 'prev') {
      this.router.navigate(['pokemon', this.previous?.id], { skipLocationChange: true });
    }
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

  private getPrevious(id: number) {
    this.pokemonService.getPokemonName(id).subscribe(p => this.previous = p);
  }

  private getNext(id: number) {
    this.pokemonService.getPokemonName(id).subscribe(p => this.next = p);
  }

  private getPokemon(id: number): void {
    this.pokemonService.getPokemonFullInfo(id)
      .subscribe(p => this.pokemon = p);
  }
}
