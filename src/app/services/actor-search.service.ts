import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable }     from 'rxjs';

import { Actor }          from '../models/actor';

@Injectable()
export class ActorSearchService {
  constructor(private http: Http) {}

  search(term: string): Observable<Actor[]> {
    const ret = this.http
               .get(`app/actors/?name=${term}`)
               .map((r: Response) => r.json().data.slice(0, 3) as Actor[]);

    console.log('hey!!!', ret);
    return ret;
  }
}
