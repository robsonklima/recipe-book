import { Ingredient } from './../models/ingredient';
import { Recipe } from './../models/recipe';

export class RecipeService {
    private recipes: Recipe[] = [];

    addRecipe(title: string,
              description: string,
              difficulty: string,
              ingredients: Ingredient[]
    ) {
      this.recipes.push(
        new Recipe(title, description, difficulty, ingredients)
      );

      console.log(this.recipes);
    }

    getRecipes() {
      return this.recipes.slice();
    }

    updateRecipe(index: number, 
                 title: string, 
                 description: string, 
                 difficult: string, 
                 ingredients: Ingredient[]) {
      this.recipes[index] = new Recipe(title, description, difficult, ingredients);
    }

    removeRecipe(index: number) {
      this.recipes.splice(index, 1);
    }
}