import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PokemonInfoService {
  private httpOptions = {};
  private url = 'https://pokeapi.co/api/v2/pokemon/63/';

  public getPokemonsInfo() {
    return this.httpClient.get(this.url, this.httpOptions) as Observable<any>;
  }

  constructor(private httpClient: HttpClient) {}
}
