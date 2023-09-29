import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonDetailComponent } from './pokemon-detail.component';
import { ActivatedRoute, Router } from '@angular/router';
import { of } from 'rxjs';
import { PokemonService } from '../../services/pokemon.service';
import { Pokemon } from '../../models/pokemon.model';
import { PokemonPaginationComponent } from '../pokemon-pagination/pokemon-pagination.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { PokemonInfoComponent } from '../pokemon-info/pokemon-info.component';

describe('PokemonDetailComponent', () => {
  let component: PokemonDetailComponent;
  let fixture: ComponentFixture<PokemonDetailComponent>;
  let routerSpy: jasmine.SpyObj<Router>;
  let route: ActivatedRoute;
  let pokemonService: jasmine.SpyObj<PokemonService>;

  beforeEach(() => {
    const routerSpyObj = jasmine.createSpyObj('Router', ['navigate']);
    const activatedRouteSpyObj = {
      paramMap: of({ get: (key: string) => '1' }), // Simula la activación con ID 1
    };
    const pokemonServiceSpyObj = jasmine.createSpyObj('PokemonService', [
      'getPokemonName',
      'getPokemonFullInfo',
    ]);

    TestBed.configureTestingModule({
      declarations: [PokemonDetailComponent, PokemonPaginationComponent, PokemonInfoComponent],
      imports: [SharedModule],
      providers: [
        { provide: Router, useValue: routerSpyObj },
        { provide: ActivatedRoute, useValue: activatedRouteSpyObj },
        { provide: PokemonService, useValue: pokemonServiceSpyObj },
      ],
    });

    fixture = TestBed.createComponent(PokemonDetailComponent);
    component = fixture.componentInstance;
    routerSpy = TestBed.inject(Router) as jasmine.SpyObj<Router>;
    route = TestBed.inject(ActivatedRoute);
    pokemonService = TestBed.inject(PokemonService) as jasmine.SpyObj<PokemonService>;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should navigate to previous Pokemon', () => {
    component.previous = { id: 0, name: 'Previous' } as Pokemon;
    component.onClickPagination('prev');
    expect(routerSpy.navigate).toHaveBeenCalledWith(['pokemon', 0], {
      skipLocationChange: true,
    });
  });

  it('should navigate to next Pokemon', () => {
    component.next = { id: 2, name: 'Next' } as Pokemon;
    component.onClickPagination('next');
    expect(routerSpy.navigate).toHaveBeenCalledWith(['pokemon', 2], {
      skipLocationChange: true,
    });
  });

  it('should unsubscribe onDestroy', () => {
    const paramMapSpy = spyOn(route.paramMap, 'subscribe');
    fixture.detectChanges();
    fixture.destroy();

    expect(paramMapSpy).toHaveBeenCalled();
  });
});
