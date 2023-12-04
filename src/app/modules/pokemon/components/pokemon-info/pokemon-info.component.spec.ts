import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonInfoComponent } from './pokemon-info.component';

describe('PokemonInfoComponent', () => {
  let component: PokemonInfoComponent;
  let fixture: ComponentFixture<PokemonInfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PokemonInfoComponent]
    });
    fixture = TestBed.createComponent(PokemonInfoComponent);
    component = fixture.componentInstance;
    component.pokemon = {
      imageUrl: 'mock url',
      id: 1,
      name: 'Mock',
      types: [],
      description: 'mock description',
      height: 10,
      weight: 20,
      category: 'mock category',
      ability: 'mock ability',
      weakness: []
    }
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
