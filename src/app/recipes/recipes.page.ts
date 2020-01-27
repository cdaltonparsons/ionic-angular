import { Component, OnInit } from "@angular/core";

import { Recipe } from "./recipe.model";
@Component({
  selector: "app-recipes",
  templateUrl: "./recipes.page.html",
  styleUrls: ["./recipes.page.scss"]
})
export class RecipesPage implements OnInit {
  recipes: Recipe[] = [
    {
      id: "r1",
      title: "Schnitzel",
      imageUrl:
        "https://www.thespruceeats.com/thmb/LeyN-7W9T0KB2nl6pcuDZckHnjc=/4288x2848/filters:fill(auto,1)/wiener-schnitzel-recipe-1447089-Hero-5b587d6c46e0fb0071b0059d.jpg",
      ingredients: ["French Fries", "Pork Meat", "Salad"]
    },
    {
      id: "r2",
      title: "Spaghetti",
      imageUrl:
        "https://www.inspiredtaste.net/wp-content/uploads/2019/03/Spaghetti-with-Meat-Sauce-Recipe-1-1200.jpg",
      ingredients: ["Spaghetti", "Meat", "Tomatoes"]
    }
  ];
  constructor() { }

  ngOnInit() { }
}
