import { ShoppingListService } from './shopping-list.service';
import { Ingredients } from './../shared/ingredients.model';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Ingredients[];
  private changeSub: Subscription
  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
    this.ingredients = this.shoppingListService.getIngredients();
    this.changeSub = this.shoppingListService.ingredientsChanged.subscribe((ingredients: Ingredients[]) => {this.ingredients = ingredients});
  }

  ngOnDestroy(){
    this.changeSub.unsubscribe();
  }

  onEditItem(index: number){
    this.shoppingListService.startEditing.next(index);
  }

}
