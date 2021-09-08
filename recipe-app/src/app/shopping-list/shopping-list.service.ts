import { Ingredient } from "../shared/ingredient.model";

export class ShoppingListService {
    ingredients: Ingredient [] = [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 10),
      ];

      getIncredients() {
          return this.ingredients.slice();
      }
   // addIngredient method from shopping-list component
}