import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Pokemon } from '../../models/pokemon.model';

export type PaginationBtnOption = 'prev' | 'next';

@Component({
  selector: 'app-pokemon-pagination',
  templateUrl: './pokemon-pagination.component.html',
  styleUrls: ['./pokemon-pagination.component.scss']
})
export class PokemonPaginationComponent {
  @Input() previous?: Pokemon;
  @Input() next?: Pokemon;
  @Output() clickBtn = new EventEmitter<PaginationBtnOption>();

  onClickBtn(option: PaginationBtnOption): void {
    this.clickBtn.emit(option);
  }
}
