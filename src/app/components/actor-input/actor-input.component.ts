import { Component, OnInit } from '@angular/core';
import { Observable }        from 'rxjs/Observable';
import { Subject }           from 'rxjs/Subject';

import { Actor } from '../../models/actor';
import { ActorSearchService } from '../../services/actor-search.service';

@Component({
  selector: 'ActorInput',
  templateUrl: './actor-input.component.html',
  styleUrls: ['./actor-input.component.sass'],
  providers: [ ActorSearchService ]
})
export class ActorInputComponent implements OnInit {
  actors: Observable<Actor[]>;
  private searchTerms = new Subject<string>();

  constructor(
    private actorSearchService: ActorSearchService
  ) {}

  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.actors = this.searchTerms
      .debounceTime(300)        // wait for 300ms pause in events
      .distinctUntilChanged()   // ignore if next search term is same as previous
      .switchMap(term => term   // switch to new observable each time
        // return the http search observable
        ? this.actorSearchService.search(term)
        // or the observable of empty heroes if no search term
        : Observable.of<Actor[]>([]))
      .catch(error => {
        // TODO: real error handling
        console.log(error);
        return Observable.of<Actor[]>([]);
      });

  }

  gotoDetail(actor: Actor): void {
    alert(actor.name);
  }
}
