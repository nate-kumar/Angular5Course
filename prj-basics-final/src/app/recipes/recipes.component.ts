import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipes/recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  receivedRecipe = new Recipe("Placeholder Name", "Placeholder Description", "https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg");
  receiveRecipe($event) {
    this.receivedRecipe = $event;
    console.log(this.receivedRecipe)
  }
}
