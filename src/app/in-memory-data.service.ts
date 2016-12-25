import { InMemoryDbService } from 'angular-in-memory-web-api';
import { ACTORS } from './services/actors-mock';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    return {
      actors: ACTORS
    };
  }
}
