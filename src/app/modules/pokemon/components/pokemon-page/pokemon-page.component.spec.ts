import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonPageComponent } from './pokemon-page.component';
import { PokemonService } from '../../services/pokemon.service';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

describe('PokemonPageComponent', () => {
  let component: PokemonPageComponent;
  let fixture: ComponentFixture<PokemonPageComponent>;
  let pokemonService: jasmine.SpyObj<PokemonService>;
  let router: Router;

  beforeEach(() => {
    const pokemonServiceSpy = jasmine.createSpyObj('PokemonService', ['getAllPokemon']);

    TestBed.configureTestingModule({
      imports: [RouterTestingModule], // Importa RouterTestingModule para las pruebas de enrutamiento
      declarations: [PokemonPageComponent],
      providers: [
        { provide: PokemonService, useValue: pokemonServiceSpy },
      ],
    });
    fixture = TestBed.createComponent(PokemonPageComponent);
    component = fixture.componentInstance;
    pokemonService = TestBed.inject(PokemonService) as jasmine.SpyObj<PokemonService>;
    router = TestBed.inject(Router);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
