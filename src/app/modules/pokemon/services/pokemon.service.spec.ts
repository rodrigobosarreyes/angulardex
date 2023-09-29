import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { PokemonService } from './pokemon.service';
import { Pokemon } from '../models/pokemon.model';

describe('PokemonService', () => {
  let service: PokemonService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PokemonService]
    });
    service = TestBed.inject(PokemonService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get all Pokémon', () => {
    const offset = 0;
    const mockResponse = {
      results: [
        { name: 'pokemon1', url: 'https://pokeapi.co/api/v2/pokemon/1/' },
        { name: 'pokemon2', url: 'https://pokeapi.co/api/v2/pokemon/2/' }
      ]
    };

    service.getAllPokemon(offset).subscribe((pokemons) => {
      expect(pokemons.length).toBe(2);
      expect(pokemons[0].name).toBe('pokemon1');
      expect(pokemons[1].name).toBe('pokemon2');
    });

    const req = httpMock.expectOne(`https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=12`);
    expect(req.request.method).toBe('GET');
    req.flush(mockResponse);
    httpMock.expectOne(`https://pokeapi.co/api/v2/pokemon/1/`);
    httpMock.expectOne(`https://pokeapi.co/api/v2/pokemon/2/`);
  });

  it('should get Pokemon name', () => {
    const mockResponse: Pokemon = {
      id: 1,
      name: 'bulbasaur',
      imageUrl: '',
      types: []
    };

    service.getPokemonName(1).subscribe((data) => {
      expect(data).toEqual(mockResponse as Pokemon);
    });

    const req = httpMock.expectOne('https://pokeapi.co/api/v2/pokemon/1');
    expect(req.request.method).toBe('GET');
    req.flush(mockResponse);
  });

  it('should get Pokemon full info', () => {
    const mockResponse = {
      id: 1,
      types: [{type : {name: 'grass'}}, {type: {name: 'poison'}}],
      sprites: {other: {'official-artwork': {front_default: 'https://pokeapi.co/media/sprites/pokemon/1.png'}}},
      height: 7,
      weight: 69,
      description: 'A strange seed was planted on its back at birth.',
      category: 'Seed',
      abilities: [{is_hidden: false, ability: {url: 'https://pokeapi.co/api/v2/ability/1'}}],
      species: {url: 'https://pokeapi.co/api/v2/pokemon_species/1'}
    };

    service.getPokemonFullInfo(1).subscribe((data) => {
      expect(data).toEqual(mockResponse);
    });

    const req = httpMock.expectOne('https://pokeapi.co/api/v2/pokemon/1');
    expect(req.request.method).toBe('GET');
    req.flush({ ...mockResponse });
    httpMock.expectOne(`https://pokeapi.co/api/v2/ability/1`);
    httpMock.expectOne(`https://pokeapi.co/api/v2/type/grass`);
    httpMock.expectOne(`https://pokeapi.co/api/v2/type/poison`);
    httpMock.expectOne(`https://pokeapi.co/api/v2/pokemon_species/1`);
  });

  it('should get Pokemon weaknesses', () => {
    const mockTypes = ['Fire', 'Ice', 'Flying', 'Psychic'];

    // Define las respuestas simuladas para las llamadas HTTP.
    const mockResponses = mockTypes.map((type) => ({
      damage_relations: {
        double_damage_from: [{ name: 'Electric' }, { name: 'Water' }],
        half_damage_from: [{ name: 'Grass' }, { name: 'Ground' }],
        no_damage_from: [{ name: 'Rock' }, { name: 'Fighting' }]
      }
    }));

    // Llama a la función getPokemonWeakness y verifica las debilidades.
    service.getPokemonWeakness(mockTypes).subscribe((weaknesses) => {
      expect(weaknesses.length).toBe(6);

      // Verifica algunas debilidades específicas.
      expect(weaknesses).toContain({ type: 'Electric', multiplier: 16 });
      expect(weaknesses).toContain({ type: 'Water', multiplier: 16 });
      expect(weaknesses).toContain({ type: 'Grass', multiplier: 0.0625 });
      expect(weaknesses).toContain({ type: 'Ground', multiplier: 0.0625 });
      expect(weaknesses).toContain({ type: 'Rock', multiplier: 0 });
      expect(weaknesses).toContain({ type: 'Fighting', multiplier: 0 });
    });

    // Verifica las solicitudes HTTP realizadas.
    const requests = httpMock.match((request) => request.url.startsWith('https://pokeapi.co/api/v2/type/'));
    expect(requests.length).toBe(mockTypes.length);

    // Simula las respuestas HTTP.
    requests.forEach((request, index) => {
      request.flush(mockResponses[index]);
    });
  });
});

