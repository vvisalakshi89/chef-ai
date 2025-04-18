import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'; // Import HttpClient
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  

private apiUrl ='http://localhost:3000/api/recipe';

  constructor(private http: HttpClient) {}

  generateRecipe(prompt: string) {
    const headers = new HttpHeaders({
    //  Authorization: `Bearer ${this.apiKey}`,
      'Content-Type': 'application/json',
    });

    const body = {
      inputs: prompt,
      parameters: {
        max_new_tokens: 150,
        temperature: 0.7,
      },
    };

    return this.http.post<any>(this.apiUrl, body, { headers });

   }

}
