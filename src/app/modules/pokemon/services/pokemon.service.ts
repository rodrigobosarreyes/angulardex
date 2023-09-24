import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, mergeMap, tap } from 'rxjs';

@Injectable({
  providedIn: null
})
export class PokemonService {
  url = 'https://pokeapi.co/api/v2/pokemon/?offset={{offset}}&limit=10';

  constructor(private readonly http: HttpClient) { }

  getAllPokemon(offset: number): Observable<any> {
    return this.http.get<any>(this.url.replace('{{offset}}', offset.toString()))
      .pipe(
        tap(res => console.log('Objeto original: ', res)),
        mergeMap(res => res.results),
        mergeMap((a: any) => this.http.get(a.url))
      );
  }
}
