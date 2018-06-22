import { Recipe } from './recipe.model';
import { Injectable, EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  recipeSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe(
      'Next level paella',
      'Classic Spanish seafood dish',
      'https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe/recipe-image/2018/06/paella.jpg?itok=7-8NZbQE',
      [
        new Ingredient('Tiger Prawns', 10),
        new Ingredient('Onion', 1)
      ]
    ),
    new Recipe(
      'A Test Recipe',
      'This is simply a test',
      'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',
      [
        new Ingredient('Meat', 1),
        new Ingredient('Onion', 1)
      ]
    ),
  ];

  constructor() { }

  getRecipes() {
    return this.recipes.slice();
  }

}
