import { PokemonService } from '../../services/pokemon.service';
import { OnInit, Component, Input } from '@angular/core';

@Component({
  selector: 'app-moviesComponent',
  templateUrl: './moviesComponent.html',
  styleUrls: ['./moviesComponent.css'],
})
export class MoviesComponent implements OnInit {
  @Input() search!: string;
  pokemons: any;
  constructor(private pokemonService: PokemonService) {}
  ngOnInit(): void {
    this.getPokemon();
  }
  public getPokemon(): void {
    this.pokemonService.getPokemons().subscribe((pokemons) => {
      this.pokemons = pokemons.results;
      console.log(pokemons.results);
    });
  }
}
