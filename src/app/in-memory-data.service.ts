import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Treinador } from './treinador';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const treinadores = [
      { id: 11, name: 'Dr Nice' },
      { id: 12, name: 'Narco' },
      { id: 13, name: 'Bombasto' },
      { id: 14, name: 'Celeritas' },
      { id: 15, name: 'Magneta' },
      { id: 16, name: 'RubberMan' },
      { id: 17, name: 'Dynama' },
      { id: 18, name: 'Dr IQ' },
      { id: 19, name: 'Magma' },
      { id: 20, name: 'Tornado' }
    ];
    return {treinadores};
  }

  // Overrides the genId method to ensure that a treinador always has an id.
  // If the treinadores array is empty,
  // the method below returns the initial number (11).
  // if the treinadores array is not empty, the method below returns the highest
  // treinador id + 1.
  genId(treinadores: Treinador[]): number {
    return treinadores.length > 0 ? Math.max(...treinadores.map(treinador => treinador.id)) + 1 : 11;
  }
}
