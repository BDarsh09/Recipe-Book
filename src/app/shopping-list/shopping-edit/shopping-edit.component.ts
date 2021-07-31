import { ShoppingListService } from './../shopping-list.service';
import { Component, ElementRef, EventEmitter, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { Ingredients } from 'src/app/shared/ingredients.model';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  // @ViewChild('nameInput') nameInputRef: ElementRef;
  // @ViewChild('amountInput') amountInputRef: ElementRef;
  // @Output() ingredientAdded = new EventEmitter<Ingredients>();
  @ViewChild('myForm') shoppingListForm: NgForm
  editMode:boolean = false;
  editItemIndex:number;
  editedItem: Ingredients
  editSubscription:Subscription;
  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit(): void {
    this.editSubscription = this.shoppingListService.startEditing.subscribe((index:number) => {
      this.editMode = true;
      this.editItemIndex = index;
      this.editedItem = this.shoppingListService.getIngredient(index);
      this.shoppingListForm.setValue({
        name: this.editedItem.name,
        amount: this.editedItem.amount
      })
    });
  }

  ngOnDestroy(){
    this.editSubscription.unsubscribe();
  }

  onAddItem(form:NgForm){
    // const ingName = this.nameInputRef.nativeElement.value;
    // const ingAmount = this.amountInputRef.nativeElement.value;
    const value= form.value;
    const ingName = value.name
    const ingAmount = value.amount
    const newIngredient = new Ingredients(ingName,ingAmount);
    if(this.editMode){
      this.shoppingListService.updateIngredients(this.editItemIndex,newIngredient)
    }
    else{
      this.shoppingListService.addIngredients(newIngredient);
    }
    this.editMode = false;
    form.reset();
    // this.ingredientAdded.emit(newIngredient);
  }

  onClear(){
    this.shoppingListForm.reset();
    this.editMode = false;
  }

  onDelete(){
    this.shoppingListService.deleteIngredientForShopping(this.editItemIndex);
    this.onClear(); 
  }

}
