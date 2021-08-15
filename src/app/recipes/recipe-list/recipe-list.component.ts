import { RecipeService } from './../recipe.service';
import { Recipe } from './../recipe.model';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit, OnDestroy {
  recipes: Recipe[];
  recipeSubscription:Subscription;
  constructor(private recipeService: RecipeService, private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.recipeSubscription = this.recipeService.recipesChanged.subscribe((recipe: Recipe[]) => {
      this.recipes = recipe
    })
    this.recipes = this.recipeService.getRecipes();
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.recipeSubscription.unsubscribe();
  }

  createNewRecipe(){
    this.router.navigate(['new'], {relativeTo: this.route});
  }
}
