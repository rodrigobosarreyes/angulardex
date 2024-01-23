import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokeAlertComponent } from './poke-alert.component';

describe('PokeAlertComponent', () => {
  let component: PokeAlertComponent;
  let fixture: ComponentFixture<PokeAlertComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PokeAlertComponent]
    });
    fixture = TestBed.createComponent(PokeAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
