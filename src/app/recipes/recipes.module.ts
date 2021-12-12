import { RecipesRoutingModule } from './recipe-routing.module';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { EditRecipeComponent } from './edit-recipe/edit-recipe.component';
import { RecipeStartComponent } from './recipe-start/recipe-start.component';
import { RecipeItemComponent } from './recipe-list/recipe-item/recipe-item.component';
import { RecipeDetailsComponent } from './recipe-details/recipe-details.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipesComponent } from './recipes.component'; 
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    RecipesComponent,
    RecipeListComponent,
    RecipeDetailsComponent,
    RecipeItemComponent,
    RecipeStartComponent,
    EditRecipeComponent
  ],
  imports: [
    SharedModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    RecipesRoutingModule
  ]
})
export class RecipesModule { 

}
