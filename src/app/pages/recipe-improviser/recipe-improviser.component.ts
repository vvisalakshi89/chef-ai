import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RecipeService } from '../../recipe.service'; // Adjust the import path as necessary
@Component({
  selector: 'app-recipe-improviser',
  templateUrl: './recipe-improviser.component.html',
  styleUrls: ['./recipe-improviser.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule],
})
export class RecipeImproviserComponent {
  recipeName = '';
  ingredients = [{ name: '', missing: false }];
  moods = [
    { label: 'Spicier', selected: false },
    { label: 'Kids-Friendly', selected: false },
    { label: 'Healthier', selected: false },
    { label: 'Quick-to-make', selected: false },
    { label: 'Budget-Friendly', selected: false }
  ];
  loading: boolean= false;
  recipeResult: any;

  constructor(private recipeService: RecipeService) {}
  aiResponse: string | null = null;

  addIngredient() {
    this.ingredients.push({ name: '', missing: false });
  }

  improviseRecipe() {
    this.loading = true;
    const missing = this.ingredients.filter(i => i.missing).map(i => i.name);
    const available = this.ingredients.filter(i => !i.missing).map(i => i.name);
    const moodTags = this.moods.filter(m => m.selected).map(m => m.label);

    const prompt = `
      I want to cook ${this.recipeName}. I'm missing the following ingredients: ${missing.join(', ')}.
      I still have: ${available.join(', ')}.
      Please adjust the recipe to be ${moodTags.join(', ')} if possible.

      Give Response with a promising statement that it is doable.
      Followed by that, give Ingredients in the below format.
      <h3>Ingredients</h3>
      <h4>List of all ingredients</h4>

      <h3>Modified Recipe</h3>
      <h4> the instructions for the recipe</h4>
    `;

    console.log('Prompt to AI:', prompt);

    
    // Simulated AI response for now
    /*this.aiResponse = `
      <h4>${this.recipeName} – Mood Based Version</h4>
      <ul>
        <li>Use carrots instead of bell peppers</li>
        <li>Make it spicy by adding red chili powder</li>
        <li>For kids-friendly version, reduce spice and add cheese</li>
      </ul>
    `;*/

    this.recipeService.generateRecipe(prompt).subscribe(
      (response: any) => {
        this.loading = false;
        const content = response.choices?.[0]?.message?.content || 'No recipe found.';
        this.recipeResult = content;
        this.aiResponse = content; // Update the AI response
      },
      (error: any) => {
        this.loading = false;
        this.aiResponse = 'Something went wrong. Please try again.';
        console.error(error);
      }
    );

  }
}
