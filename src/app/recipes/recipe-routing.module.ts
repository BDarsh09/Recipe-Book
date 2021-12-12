import { RecipeDetailsComponent } from './recipe-details/recipe-details.component';
import { RecipesResolverService } from './recipe-start/recipes-resolver.service';
import { EditRecipeComponent } from './edit-recipe/edit-recipe.component';
import { RecipeStartComponent } from './recipe-start/recipe-start.component';
import { RecipesComponent } from './recipes.component';
import { AuthGuard } from './../auth/auth.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {
        path: '', component: RecipesComponent,
        canActivate: [AuthGuard],
        children: [
            { path: '', component: RecipeStartComponent },
            { path: 'new', component: EditRecipeComponent },
            { path: ':id', component: RecipeDetailsComponent, resolve: [RecipesResolverService] },
            { path: ':id/edit', component: EditRecipeComponent, resolve: [RecipesResolverService] }
        ]
    },
]

@NgModule({
    imports: [ RouterModule.forChild(routes) ],
    exports: [RouterModule]
})
export class RecipesRoutingModule {}