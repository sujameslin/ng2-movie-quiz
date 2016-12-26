import { Component, Input, OnChanges, SimpleChange } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { MdSnackBar } from '@angular/material';

import { Cast } from '../../models/cast';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'Cast',
  templateUrl: './cast.component.html',
  styleUrls: ['./cast.component.sass'],
  providers: [MovieService]
})
export class CastComponent implements OnChanges {
  casts: Observable<Cast[]>;
  @Input() movieId: number;

  constructor(
    private movieService: MovieService,
    public snackBar: MdSnackBar
  ) {
    this.snackBar.open('Get \'em next time.');
  }

  ngOnChanges(changes: {[propKey: string]: SimpleChange}) {
    let log: string[] = [];
    const movieIdChange: any = changes['movieId'];

    this.getCastsByMovieId(movieIdChange.currentValue);
  }

  getCastsByMovieId(movieId: number) {
    this.casts = this.movieService
      .getCastsByMovie(movieId)
      .catch(error => {
        // TODO: real error handling
        console.log(error);
        return Observable.of<Cast[]>([]);
      });
  }
}
