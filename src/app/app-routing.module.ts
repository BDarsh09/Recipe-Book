import { AuthComponent } from './auth/auth.component';
import { RecipesResolverService } from './recipes/recipe-start/recipes-resolver.service';
import { EditRecipeComponent } from './recipes/edit-recipe/edit-recipe.component';
import { RecipeDetailsComponent } from './recipes/recipe-details/recipe-details.component';
import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipesComponent } from './recipes/recipes.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path:'recipes', component: RecipesComponent, children : [
    {path: '', component: RecipeStartComponent},
    {path: 'new', component:EditRecipeComponent},
    {path: ':id', component:RecipeDetailsComponent, resolve: [RecipesResolverService]},
    {path: ':id/edit', component:EditRecipeComponent, resolve: [RecipesResolverService]}
  ]},
  {path:'shopping-list', component: ShoppingListComponent},
  {path:'login', component: AuthComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
