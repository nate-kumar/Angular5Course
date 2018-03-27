import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ShoppingListComponent } from './container-shopping-list/shopping-list/shopping-list.component';
import { HeaderComponent } from './header/header.component';
import { ShoppingListEditComponent } from './container-shopping-list/shopping-list/shopping-list-edit/shopping-list-edit.component';
import { IngredientComponent } from './container-shopping-list/ingredient/ingredient.component';
import { RecipeListComponent } from './container-recipe-book/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './container-recipe-book/recipe-list/recipe-item/recipe-item.component';
import { RecipeDetailComponent } from './container-recipe-book/recipe-detail/recipe-detail.component';
import { RecipeComponent } from './container-recipe-book/recipe/recipe.component';
import { ContainerRecipeBookComponent } from './container-recipe-book/container-recipe-book.component';
import { ContainerShoppingListComponent } from './container-shopping-list/container-shopping-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ShoppingListComponent,
    HeaderComponent,
    ShoppingListEditComponent,
    IngredientComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipeDetailComponent,
    RecipeComponent,
    ContainerRecipeBookComponent,
    ContainerShoppingListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
