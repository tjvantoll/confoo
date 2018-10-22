import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";

import { PokemonHelper } from "./pokemon-helper";

@Injectable()
export class PokemonService {
  saved;
  helper;

  constructor(private http: HttpClient) {
    this.helper = new PokemonHelper();
    this.saved = this.helper.readItems();
  }

  get() {
    return this.http.get("https://rawgit.com/tjvantoll/ShinyDex/master/assets/151.json")
      .pipe(
        map((data: any) => {
          const returnData = [];
          data.results.forEach((item) => {
            item.selected = this.saved.indexOf(item.id) != -1;
            returnData.push(item);
          })
          return returnData;
        })
      );
  }

  toggleSelected(item) {
    if (item.selected) {
      this.saved.splice(this.saved.indexOf(item.id), 1);
    } else {
      this.saved.push(item.id);
    }

    item.selected = !item.selected;
    this.save();
  }

  save() {
    this.helper.writeItems(this.saved);
  }
}
