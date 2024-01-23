import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokeInputComponent } from './poke-input.component';

describe('PokeInputComponent', () => {
  let component: PokeInputComponent;
  let fixture: ComponentFixture<PokeInputComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PokeInputComponent]
    });
    fixture = TestBed.createComponent(PokeInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
