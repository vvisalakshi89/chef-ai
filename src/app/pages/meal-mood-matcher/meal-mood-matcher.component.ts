import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // needed for [(ngModel)]
import { RecipeService } from '../../recipe.service'; // Adjust the import path as necessary

@Component({
  standalone: true,
  selector: 'app-meal-mood-matcher',
  imports: [CommonModule, FormsModule],
  templateUrl: './meal-mood-matcher.component.html',
  styleUrls: ['./meal-mood-matcher.component.css']
})

export class MealMoodMatcherComponent {
  moods = [
    { label: 'Happy', icon: '😄' },
    { label: 'Sad', icon: '😢' },
    { label: 'Stressed', icon: '😫' },
    { label: 'Energetic', icon: '⚡' },
    { label: 'Bored', icon: '😐' },
    { label: 'Romantic', icon: '❤️' }
  ];

  selectedMood: string = '';
  customInput: string = '';
  loading: boolean = false;
  recipeResult: string = '';

  constructor(private recipeService: RecipeService) {}

  selectMood(mood: string) {
    this.selectedMood = mood;
  }

  getMealSuggestion() {
    if (!this.selectedMood) {
      this.recipeResult = 'Please select a mood first.';
      return;
    }

    this.loading = true;
    this.recipeResult = '';

    const prompt = `Suggest a meal for someone who is feeling ${this.selectedMood}.
    Dietary preference: ${this.customInput || 'none'}.
    Give a short description and name of the dish. Keep it light and fun.`;

    this.recipeService.generateRecipe(prompt).subscribe(
      (response: any) => {
        this.loading = false;
        const content = response.choices?.[0]?.message?.content || 'No recipe found.';
        this.recipeResult = content;
      },
      (error: any) => {
        this.loading = false;
        this.recipeResult = 'Something went wrong. Please try again.';
        console.error(error);
      }
    );
  }
}
