import { Ingredients } from '../shared/ingredients.module';

export class ShoppingService {

    private ingredients: Ingredients[] = [
        new Ingredients('Orange', 5),
        new Ingredients('Tomatoes', 10)
      ];

      getIngredients() {
          return this.ingredients;
      }

      addIngredient(ingredient:Ingredients) {
          this.ingredients.push(ingredient);
      }

      addIngredients(ingredeints: Ingredients[]){
          this.ingredients.push(...ingredeints);
      }
}

