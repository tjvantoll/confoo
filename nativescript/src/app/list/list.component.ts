import { Component, OnInit } from "@angular/core";

import { PokemonService } from "../pokemon/pokemon.service";

@Component({
  selector: "app-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.css"]
})
export class ListComponent implements OnInit {
  items: any[];

  constructor(private pokemonService: PokemonService) {}
  
  ngOnInit() {
    this.pokemonService.get().subscribe((data: any) => {
      this.items = data;
    });
  }

  itemTapped(item) {
    this.pokemonService.toggleSelected(item);
  }
}
