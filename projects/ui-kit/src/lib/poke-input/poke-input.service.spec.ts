import { TestBed } from '@angular/core/testing';

import { PokeInputService } from './poke-input.service';

describe('PokeInputService', () => {
  let service: PokeInputService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PokeInputService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
