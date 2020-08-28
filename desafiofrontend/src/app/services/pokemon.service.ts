import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  private httpOptions = {};
  private url = 'https://pokeapi.co/api/v2/pokemon?limit=1048&offset=0';

  public getPokemons() {
    return this.httpClient.get(this.url, this.httpOptions) as Observable<any>;
  }
  public getPokemonInfo(url: string){
    return this.httpClient.get(url, this.httpOptions) as Observable<any>;
  }
  constructor(private httpClient: HttpClient) {}
}
