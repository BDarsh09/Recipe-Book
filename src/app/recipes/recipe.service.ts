import { ShoppingListService } from './../shopping-list/shopping-list.service';
import { Injectable, EventEmitter } from '@angular/core';
import { Ingredients } from '../shared/ingredients.model';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
// ***************************************** Properties *************************************
recipeSelected = new EventEmitter<Recipe>();  
private recipes: Recipe[] = [
    new Recipe(
      'Dark Chocolate Lava Cake',
      'Spongy Cake - Full of Dark Chocolate',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Recipe_logo.jpeg/480px-Recipe_logo.jpeg',
      [
        new Ingredients('Sweet Chocolates', 24),
        new Ingredients('Butter',1),
        new Ingredients('Flour',1/4),
        new Ingredients('Sugar',1/2),
        new Ingredients('Salt',1/8),
        new Ingredients('Toppings',2),
      ],
    ),
  ];

  // ************************************** Constructor *************************************
  constructor(private shoppingListService: ShoppingListService) { }

  // ************************************** Methods ******************************************

  getRecipes(){
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredients[]){
    this.shoppingListService.addIngredientsForShopping(ingredients);
  }
}
