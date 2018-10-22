export class PokemonHelper {
  readItems() {
    let saved = localStorage.getItem("items");
    if (saved) {
      return JSON.parse(saved);
    } else {
      return [];
    }
  }

  writeItems(items) {
    localStorage.setItem("items", JSON.stringify(items));
  }
}
