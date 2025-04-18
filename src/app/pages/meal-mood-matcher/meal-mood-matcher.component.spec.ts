import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MealMoodMatcherComponent } from './meal-mood-matcher.component';

describe('MealMoodMatcherComponent', () => {
  let component: MealMoodMatcherComponent;
  let fixture: ComponentFixture<MealMoodMatcherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MealMoodMatcherComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MealMoodMatcherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
