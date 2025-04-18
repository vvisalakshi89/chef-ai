import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent {

  constructor(private router: Router) {}


  start() {
    console.log('Starting recipe suggestion...');
    this.router.navigate(['/home']);
    // Here you could call a method that integrates with the OpenAI API or another service.
  }
}
