import { Injectable, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';
import { Ingredients } from '../shared/ingredients.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
// ***************************************** Properties *************************************
ingredientsChanged = new Subject<Ingredients[]>();
startEditing = new Subject<Number>();
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

getIngredient(index){
  return this.ingredients[index];
}

addIngredients(ingredient: Ingredients){
  this.ingredients.push(ingredient);
  this.ingredientsChanged.next(this.ingredients.slice());
}

updateIngredients(index: number, newIngredient: Ingredients){
  this.ingredients[index] = newIngredient;
  this.ingredientsChanged.next(this.ingredients.slice());
}

addIngredientsForShopping(ingredients: Ingredients[]){
  // for(let ingredient of ingredients){
  //   this.addIngredients(ingredient);
  // }
  this.ingredients.push(...ingredients);
  this.ingredientsChanged.next(this.ingredients.slice());
}
}
