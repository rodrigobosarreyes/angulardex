import { Component } from '@angular/core';
import { PaginationBtnOption } from '../pokemon-pagination/pokemon-pagination.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.scss']
})
export class PokemonDetailComponent {
  ptypes = ['Grass'];

  constructor(private router: Router) {}

  onClickPagination(opt: PaginationBtnOption): void {
    if (opt === 'next') {
      this.router.navigate(['pokemon', '2']);
    } else if (opt === 'prev') {
      this.router.navigate(['pokemon', '1']);
    }
  }
}
