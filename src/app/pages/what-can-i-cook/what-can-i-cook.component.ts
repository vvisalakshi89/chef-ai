import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // For using common directives
import { FormsModule } from '@angular/forms'; // For ngModel support
import { RecipeService } from '../../recipe.service'; // Your service to interact with the API

@Component({
  selector: 'app-what-can-i-cook',
  standalone: true,
  imports: [CommonModule, FormsModule],  // Import FormsModule here
  templateUrl: './what-can-i-cook.component.html',
  styleUrls: ['./what-can-i-cook.component.css']
})
export class WhatCanICookComponent {
  form = {
    ingredients: '',
    foodType: '',
    diet: '',
    dishType: '',
    prepTime: '',
    avoid: {
      eggs: false,
      oil: false,
      deepfried: false
    }
  };

  recipeResult: any; // Property for storing recipe result
  imageUrl:any;
  loading: boolean = false; // Property to manage loading state
  error: string | null = null; // Property to manage error state
  success: string | null = null; // Property to manage success state
  constructor(private recipeService: RecipeService) {}

  getAvoidList(): string {
    const avoid = this.form.avoid;
    const list = [];
    if (avoid.eggs) list.push('eggs');
    if (avoid.oil) list.push('oil');
    if (avoid.deepfried) list.push('deep-fried items');
    return list.join(', ') || 'none';
  }

  

  onSubmit() {
    this.loading = true; // Set loading to true when the form is submitted
    this.error = null; // Reset error state
    this.success = null; // Reset success state
    console.log('Form submitted:', this.form); // Log the form data

    const prompt = `

Generate a recipe in a readable format along with a name of dish.

Ingredients: ${this.form.ingredients}
Cuisine: ${this.form.foodType}
Diet: ${this.form.diet}
Dish Type: ${this.form.dishType}
Prep Time: ${this.form.prepTime}
Avoid: ${this.getAvoidList()}

Include image of the dish or link to the image or image of ingredients in the response.

Give response in the below format:
<h2>Recipe Name:</h2> <b><name of dish></b
<h2>Ingredients:</h2><list of ingredients><br/>
<h2>Instructions:</h2><step by step instructions>
imageUrl: Url of the image of the dish or ingredients
`;


    this.recipeService.generateRecipe(prompt).subscribe(
      (response: any) => {
        this.loading = false;
        console.log('API Response:', response); // Log the response to check its structure
        const contentResponse = response.choices[0].message.content;
        console.log(contentResponse);

        const match = contentResponse.match("imageUrl");
        const imageUrl = match ? match[1] : null;
        
        console.log('Extracted Image URL:', imageUrl);

        // Also remove the markdown image from the content
     //   const cleanedHtmlForImg = contentResponse.replace(imageRegex, '');
        // Try to safely access the response and handle undefined cases
        if (contentResponse) {
          this.recipeResult = contentResponse;
          this.imageUrl = imageUrl; // Store the image URL
        } else {
          this.recipeResult = 'No recipe generated! Please try again with different inputs.';
        }
        
      },
      (error) => {
        console.error('Error generating recipe:', error);
        this.recipeResult = 'Error generating recipe. Please try again later.';
      }
    );
  }
}
