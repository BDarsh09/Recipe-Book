import { Injectable, EventEmitter } from '@angular/core';
import { Ingredients } from '../shared/ingredients.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
// ***************************************** Properties *************************************
ingredientsChanged = new EventEmitter<Ingredients[]>();
private ingredients:Ingredients[] = [
    new Ingredients('Apples',5),
    new Ingredients('Tomatoes',10)
  ];
// ************************************** Constructor *************************************
  constructor() { }
// ************************************** Methods ******************************************

getIngredients(){
  return this.ingredients.slice();
}

addIngredients(ingredient: Ingredients){
  this.ingredients.push(ingredient);
  this.ingredientsChanged.emit(this.ingredients.slice());
}

addIngredientsForShopping(ingredients: Ingredients[]){
  // for(let ingredient of ingredients){
  //   this.addIngredients(ingredient);
  // }
  this.ingredients.push(...ingredients);
  this.ingredientsChanged.emit(this.ingredients.slice());
}
}
