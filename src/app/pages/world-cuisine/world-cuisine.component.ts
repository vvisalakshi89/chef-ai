import { Component, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { RecipeService } from '../../recipe.service';
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-global-taste-explorer',
  imports: [CommonModule],
  templateUrl: './world-cuisine.component.html',
  styleUrls: ['./world-cuisine.component.css']
})
export class WorldCuisineComponent {
  // List of countries with their respective codes and flag images
  countries = [
    { code: 'IN', name: 'India', flag: 'https://flagcdn.com/w40/in.png' },
    { code: 'US', name: 'USA', flag: 'https://flagcdn.com/w40/us.png' },
    { code: 'FR', name: 'France', flag: 'https://flagcdn.com/w40/fr.png' },
    { code: 'JP', name: 'Japan', flag: 'https://flagcdn.com/w40/jp.png' },
    { code: 'BR', name: 'Brazil', flag: 'https://flagcdn.com/w40/br.png' },
    { code: 'CN', name: 'China', flag: 'https://flagcdn.com/w40/cn.png' },
    { code: 'IT', name: 'Italy', flag: 'https://flagcdn.com/w40/it.png' },
    { code: 'TH', name: 'Thailand', flag: 'https://flagcdn.com/w40/th.png' },
    { code: 'KR', name: 'South Korea', flag: 'https://flagcdn.com/w40/kr.png' },
    { code: 'MX', name: 'Mexico', flag: 'https://flagcdn.com/w40/mx.png' },
    { code: 'DE', name: 'Germany', flag: 'https://flagcdn.com/w40/de.png' },
    { code: 'ES', name: 'Spain', flag: 'https://flagcdn.com/w40/es.png' },
    { code: 'RU', name: 'Russia', flag: 'https://flagcdn.com/w40/ru.png' },
    { code: 'AU', name: 'Australia', flag: 'https://flagcdn.com/w40/au.png' },
    { code: 'EG', name: 'Egypt', flag: 'https://flagcdn.com/w40/eg.png' },
    { code: 'VN', name: 'Vietnam', flag: 'https://flagcdn.com/w40/vn.png' }
  ];
  
  

  loading: boolean = false;
  selectedCountry: string = '';
  aiResponseHtml: string = '';

  constructor(private recipeService: RecipeService, private cdr: ChangeDetectorRef) {}

  fetchDishes(countryCode: string): void {
    this.selectedCountry = countryCode;
    this.loading = true;
    const prompt = `Get Popular dishes of the country: ${countryCode} and give a short description...
    Give 2 lines of space in between two dishes. Limit to 5 dishes.
    Show the response in the below format.
    <h3>Dish Name</h3>
    <h4>Description of the dish</h4>
    </br>
    `;

    this.recipeService.generateRecipe(prompt).subscribe(
      (response: any) => {
        this.loading = false;
        const contentResponse = response.choices[0].message.content;
        
        if (contentResponse) {
          this.aiResponseHtml = contentResponse; // Assign the HTML response
          this.cdr.detectChanges(); // Manually trigger change detection
        } else {
          this.aiResponseHtml = 'No recipe generated! Please try again with different inputs.';
        }
      },
      (error: any) => {
        console.error('Error generating recipe:', error);
        this.aiResponseHtml = 'Error generating recipe. Please try again later.';
      }
    );
  }
}
