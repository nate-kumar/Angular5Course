import { Injectable, EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {

  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
  ];

  ingredientAdded = new EventEmitter<Ingredient[]>();

  constructor() { }

  getIngredients() {
    return this.ingredients.slice();
  }

  onIngredientAdded(seIngredient: Ingredient) {
    this.ingredients.push(seIngredient);
    this.ingredientAdded.emit(this.ingredients);
  }

  onIngredientsAdded(rdIngredients: Ingredient[]) {
    rdIngredients.forEach(
      (ingredient: Ingredient) => this.ingredients.push(ingredient)
    );
  }


}
