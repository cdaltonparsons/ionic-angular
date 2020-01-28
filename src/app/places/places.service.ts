import { Injectable } from "@angular/core";
import { Place } from "./place.model";

@Injectable({
  providedIn: "root"
})
export class PlacesService {
  private _places: Place[] = [
    new Place(
      "p1",
      "Manhattan Mansion",
      "In the heart of New York City",
      "https://www.google.com/url?sa=i&url=https%3A%2F%2Fny.curbed.com%2F2019%2F8%2F22%2F20805861%2Fnyc-moving-tips-renting-buying-homes-neighborhood&psig=AOvVaw1lrgSMchTzu7DRo_m86FiM&ust=1580335576926000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCJinw_imp-cCFQAAAAAdAAAAABAD",
      149.99
    ),
    new Place(
      "p2",
      "L'Amour Toujours",
      "A romantic place in Paris!",
      "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.archdaily.com%2F922278%2F23-places-in-paris-every-architect-must-visit&psig=AOvVaw2lLD6OLIXLkfSztBPHOwlI&ust=1580335660987000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCMC-q6Gnp-cCFQAAAAAdAAAAABAD",
      189.99
    ),
    new Place(
      "p3",
      "The Foggy Palace",
      "Not your average city trip!",
      "https://image.shutterstock.com/image-photo/foggy-castle-260nw-124264360.jpg",
      99.99
    )
  ];

  get places() {
    return [...this._places];
  }

  constructor() {}
}
