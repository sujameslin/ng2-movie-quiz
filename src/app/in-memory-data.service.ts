import { InMemoryDbService } from 'angular-in-memory-web-api';
import { ACTORS, CASTS } from './services/mock-data';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    return {
      actors: ACTORS,
      casts: CASTS
    };
  }
}
