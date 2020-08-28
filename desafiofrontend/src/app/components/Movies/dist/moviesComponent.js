"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.MoviesComponent = void 0;
var core_1 = require("@angular/core");
var MoviesComponent = /** @class */ (function () {
    function MoviesComponent(pokemonService) {
        this.pokemonService = pokemonService;
    }
    MoviesComponent.prototype.ngOnInit = function () {
        this.getPokemon();
    };
    MoviesComponent.prototype.getPokemon = function () {
        var _this = this;
        this.pokemonService.getPokemons().subscribe(function (pokemons) {
            _this.pokemons = pokemons.results;
            console.log(pokemons.results);
        });
    };
    __decorate([
        core_1.Input()
    ], MoviesComponent.prototype, "search");
    MoviesComponent = __decorate([
        core_1.Component({
            selector: 'app-moviesComponent',
            templateUrl: './moviesComponent.html',
            styleUrls: ['./moviesComponent.css']
        })
    ], MoviesComponent);
    return MoviesComponent;
}());
exports.MoviesComponent = MoviesComponent;
