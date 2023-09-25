import { Component, EventEmitter, Output } from '@angular/core';

export type PaginationBtnOption = 'prev' | 'next';

@Component({
  selector: 'app-pokemon-pagination',
  templateUrl: './pokemon-pagination.component.html',
  styleUrls: ['./pokemon-pagination.component.scss']
})
export class PokemonPaginationComponent {
  @Output() clickBtn = new EventEmitter<PaginationBtnOption>();

  onClickBtn(option: PaginationBtnOption): void {
    this.clickBtn.emit(option);
  }
}
