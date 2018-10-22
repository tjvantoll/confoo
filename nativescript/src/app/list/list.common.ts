import { Routes } from "@angular/router";

import { ListComponent } from "./list.component";
import { PokemonService } from "../pokemon/pokemon.service";

export const COMPONENT_DECLARATIONS: any[] = [
  ListComponent
];

export const PROVIDERS_DECLARATIONS: any[] = [
  PokemonService
];

export const ROUTES: Routes = [
  { path: "list", component: ListComponent },
];