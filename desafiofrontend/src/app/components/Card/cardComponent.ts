import { OnInit, Component, Input } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-cardComponent',
  templateUrl: './cardComponent.html',
  styleUrls: ['./cardComponent.css'],
})
export class CardComponent implements OnInit {
  @Input()
  title!: string;

  @Input()
  url!: string;

  public info: any;

  constructor(private pokemonService: PokemonService) {}
  ngOnInit(): void {}
  public getInfo(url: string): void {
    this.pokemonService.getPokemonInfo(url).subscribe((info: any) => {
        console.log(info);
      this.info = info;
    });
  }
  public eraseInfo(): void {
    this.info = undefined;
    
  }
}
