import { ShoppingService } from './../shopping-list/shopping-list.service';
import { Ingredients } from './../shared/ingredients.module';
import { Recipe } from './recipe.model';
import { EventEmitter, Injectable } from '@angular/core';

@Injectable()
export class RecipeService { 

    recipeSelected = new EventEmitter<Recipe>();  
    private recipes: Recipe[] = [
        new Recipe(
          'Tasty Schnitzel',
          'A super-tasty Schnitzel - just awesome!',
          'https://upload.wikimedia.org/wikipedia/commons/7/72/Schnitzel.JPG',
          [
            new Ingredients('Meat', 1),
            new Ingredients('French Fries', 20)
          ]),
        new Recipe('Big Fat Burger',
          'What else you need to say?',
          'https://upload.wikimedia.org/wikipedia/commons/b/be/Burger_King_Angus_Bacon_%26_Cheese_Steak_Burger.jpg',
          [
            new Ingredients('Buns', 2),
            new Ingredients('Meat', 1)
          ])
      ]; 

    constructor(private slService:ShoppingService){}

    getRecipes() {
        return this.recipes.slice();
    }

    getRecipe(id: number) {
      return this.recipes[id];
    }

    addIngredientToShoppingList(ingredients: Ingredients[]) {
      this.slService.addIngredients(ingredients);
    }
}
