import { Subject } from 'rxjs';
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
recipesChanged = new Subject<Recipe[]>();
private recipes: Recipe[] = [
    new Recipe(
      'Dark Chocolate Lava Cake',
      'Spongy Cake - Full of Dark Chocolate',
      'https://www.pngitem.com/pimgs/m/479-4790604_lava-cake-png-picture-chocolate-cake-transparent-png.png',
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

  setRecipes(recipes: Recipe[]){
    this.recipes = recipes;
    this.recipesChanged.next(this.recipes.slice());
  }

  getRecipes(){
    return this.recipes.slice();
  }

  getRecipe(index){
    return this.recipes[index];
  }

  addRecipe(recipe: Recipe){
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number,newRecipe: Recipe){
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number){
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }

  addIngredientsToShoppingList(ingredients: Ingredients[]){
    this.shoppingListService.addIngredientsForShopping(ingredients);
  }

}
