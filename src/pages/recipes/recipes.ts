import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Recipe } from './../../models/recipe';
import { RecipeService } from './../../services/recipe';
import { RecipePage } from './../recipe/recipe';

import { EditRecipePage } from './../edit-recipe/edit-recipe';

@Component({
  selector: 'page-recipes',
  templateUrl: 'recipes.html',
})
export class RecipesPage {
  recipes: Recipe[];

  ionViewWillEnter() {
    this.recipes = this.recipesService.getRecipes();
  }

  constructor(
    private navCtrl: NavController,
    private recipesService: RecipeService
  ) {}

  onNewRecipe() {
    this.navCtrl.push(EditRecipePage, { mode: 'New' });
  }

  onLoadRecipe(recipe: Recipe, index: number) {
    this.navCtrl.push(RecipePage, { recipe: recipe, index: index });
  }
}