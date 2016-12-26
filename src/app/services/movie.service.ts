import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable }     from 'rxjs';

import { Actor }          from '../models/actor';
import { Cast }          from '../models/cast';

@Injectable()
export class MovieService {
  constructor(private http: Http) {}

  searchActorsByName(term: string): Observable<Actor[]> {
    return this.http
               .get(`app/actors/?name=${term}`)
               .map((r: Response) => r.json().data.slice(0, 3) as Actor[]);
  }

  getCastsByMovie(movieId: number): Observable<Cast[]> {
    return this.http
               .get(`app/casts`)
               .map((r: Response) =>
                  r.json()
                    .data
                    .filter(c => c.profile_path && c.character) as Cast[]
               );
  }
}
