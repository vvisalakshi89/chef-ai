import { Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { HomeComponent } from './home/home.component';
import { WhatCanICookComponent } from './pages/what-can-i-cook/what-can-i-cook.component';
import { RecipeImproviserComponent } from './pages/recipe-improviser/recipe-improviser.component';
import { MealMoodMatcherComponent } from './pages/meal-mood-matcher/meal-mood-matcher.component';
import { WorldCuisineComponent } from './pages/world-cuisine/world-cuisine.component';

export const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'home', component: HomeComponent },
  { path: 'what-can-i-cook', component: WhatCanICookComponent },
  { path: 'recipe-improviser', component: RecipeImproviserComponent },
  { path: 'meal-mood-matcher', component: MealMoodMatcherComponent },
 { path: 'world-cuisine', component: WorldCuisineComponent}
];

